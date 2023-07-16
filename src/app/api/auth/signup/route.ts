import { NextPage } from 'next';
import { useEffect } from 'react';
import { connectDB, connection } from '@/model/connectDB';
import { NextResponse,NextRequest } from 'next/server'

import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import bodyParser from 'body-parser';
import { useSearchParams } from 'next/navigation';
import { RowDataPacket } from 'mysql2';

interface RequestWithBody extends NextApiRequest {
  body: {
    id: string; 
  };
}

export async function POST(request :Request) {

    try {

        const res = await request.json() 

        const { userName, password, rePassword } = res;
        console.log(userName,password,rePassword)

        if (!userName || !password ||!rePassword) {
          return NextResponse.json({ message: "Invalid userName or password.",errCode :0 });
        }
        await connectDB();

     
      const check = await checkAccountExist(userName)
    

      if(!check){
        if(!isValidAccount(userName))
        return   NextResponse.json({message:"accounts are 5 to 20 in length and do not contain the correct special characters", errCode : 0});
        console.log("account is correct")
        if(password !== rePassword)
        return   NextResponse.json({message:"Passwords do not match", errCode : 0});

        if(isValidPassword(password))
        return   NextResponse.json({message:"Password must be more than 1 character", errCode : 0});

        await connection.query(
          'INSERT INTO user (userName, password) VALUES (?, ?)',
          [userName, password]
        );
            return   NextResponse.json({message:"successful registration", errCode : 1});

      }
      return   NextResponse.json({message:"Account is exist", errCode :0 });
      } catch (err) {
        console.log(err)
        return   NextResponse.json({message:"err", errCode :0 });
      }
         
    }
    function isValidPassword(password: string): boolean {
      const minLength = 3;
    
      if (password.length < minLength) {
        return false;
      }
    
      const hasLetterOrDigit = /[a-zA-Z0-9]/.test(password);
    
      return hasLetterOrDigit;
    }
    function isValidAccount(account: string): boolean {
      
      const minLength = 5;
      const maxLength = 15;
    
     
      if (account.length < minLength || account.length > maxLength) {
        return false;
      }
    
      const regex = /^[a-zA-Z0-9_]+$/;
      return regex.test(account);
    }
    async function checkAccountExist(userName: string): Promise<boolean> {
      try {
        // await connectDB();
    
        const [rows] = await connection.query<RowDataPacket[] >('SELECT * FROM `user` WHERE username = ? ' , [userName]);
        return rows.length > 0;   
    
      } catch (error :any) {
        console.error('Error occurred:', error.message);
        return false; 
      }
    }

