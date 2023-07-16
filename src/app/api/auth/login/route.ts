
import { NextPage } from 'next';
import { useEffect } from 'react';
import { connectDB, connection } from '@/model/connectDB';
import { NextResponse,NextRequest } from 'next/server'
import { createConnection, RowDataPacket } from 'mysql2/promise';

import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import bodyParser from 'body-parser';
import { useSearchParams } from 'next/navigation';
import { cookies } from 'next/headers'
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
interface RequestWithBody extends NextApiRequest {
  body: {
    id: string; 
  };
}

const MAX_AGE = 60*60*24*30
export async function POST(request :Request) {
  
    try {
        const res = await request.json() 
        const { userName, password } = res;
    
        if (!userName || !password) {
          return NextResponse.json({ message: "Invalid username or password.",errCode :0 });
        }
        await connectDB();

      const userExists = await checkUserExists(userName);
      const passwordExists = await checkPasswords(userName, password);
    
      if (userExists) {
        console.log('User exists in the database.');

        if(passwordExists){
        console.log('Login is success!');
        const token = sign(
          {
           username :userName,
           password : password
          },
           "rac",
           {
               expiresIn: "1h"
           }
         )
 
         const seralized = serialize("outside ", token, {
           httpOnly :true,
           secure :process.env.NODE_ENV === "production",
           sameSite :"strict",
           maxAge:MAX_AGE,
           path:"/",
         })
         const name = serialize("username ", userName, {
          httpOnly :true,
          secure :process.env.NODE_ENV === "production",
          sameSite :"strict",
          maxAge:MAX_AGE,
          path:"/",
        })

        const response = NextResponse.json(
          {
           statusCode: 1,
           message:"login is success"
          },
          { status: 200 }
        )
      
        response.cookies.set({
          name: 'outside',
          value: token,
          httpOnly: true,
          maxAge: 60 * 60,
        })
        response.cookies.set({
          name: 'username',
          value: userName,
          httpOnly: true,
          maxAge: 60 * 60,
        })
      
        return response

        //  return new Response(JSON.stringify({ message: "Login is Success" , statusCode : 1}), {
        //    status: 200,
           
        //    headers: {
     
        //      "Set-Cookie" :seralized, 
        //     //  "Set_Cookie" :name,
        //      // token: token, 
        //      "Content-Type": "application/json" },

        //  });
        }
        // const secret = process.env.JWT_SECRET || ""
       else{
        console.log('password is not correct');
        return new Response(JSON.stringify({ message: "password is not correct.", statusCode: 0 }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
       }
        
      } else {
        console.log('User does not exist in the database.');
        return new Response(JSON.stringify({ message: "User does not exist in the database.", statusCode: 0 }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
     

      } catch (err) {
        console.log(err)
        return new Response(JSON.stringify({ message: "Internal Server Error",  statusCode: 0  }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
         
    }
    async function checkUserExists(username: string): Promise<boolean> {
      try {
    
   
        const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM user WHERE username = ?', [username]);
        return rows.length > 0;   
    
      } catch (error :any) {
        console.error('Error occurred:', error.message);
        return false; // Error occurred during database operation
      }
    }
    async function checkPasswords(username: string,password: string): Promise<boolean> {
      try {
    
   
        const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM user WHERE username = ? and password = ?', [username, password]);
        return rows.length > 0;   
    
      } catch (error :any) {
        console.error('Error occurred:', error.message);
        return false; // Error occurred during database operation
      }
    }
// export async function GET(request : Request) {
//     try {
//         connectDB()
//         const [rows] = await connection.query('SELECT * FROM user');
//         return   NextResponse.json(rows);
//       } catch (err) {
//         return   NextResponse.json({message:"err"});
//       }
   
// }
// interface RequestWithBody extends NextApiRequest {
//     body: {
//       id: string; 
//     };
//   }

