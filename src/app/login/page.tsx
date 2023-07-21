"use client"
import { useEffect, useRef, useState } from "react"
import { data } from 'autoprefixer';
import 'bootstrap/dist/css/bootstrap.css';
import "./style-login.scss"
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CounterContextProvider } from '../../context/context';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LOGIN_URL = "/api/auth/login";

export default function Login() {
    // const { username } = useMyContext();
    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const { push } = useRouter()
    useEffect(() => {




        // LoginHandler()
    }, [])
    const LoginHandler = async (e: any) => {
        const data = { userName: userName, password: password }
        e.preventDefault()

        try {
            const response = await axios.post("/api/auth/login", data)




            const result = response.data;



            if (result.statusCode === 1) {
                toast.success("Login success!")
                push("/")
            }
            setMsg(result.message)


            // const data = { userName: "hieu", password: "1" }
            // const url = "/api/login";
            // const response = await fetch(url, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data),
            // });

            // const result = await response.json();

            // console.log(response);

        } catch (error) {

            console.error(error);
        }
        finally {
            setLoading(false);

        }
    };
    function getCookie(cookieName: string) {
        const name = cookieName + '=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return null;
    }
    const handeluserName = (event: any) => {
        setuserName(event.target.value)
    }
    const handelPassword = (event: any) => {
        setPassword(event.target.value)
    }
    return (
        <>
            {/* <MyContextProvider username={userName}> */}
            <div className="login-background">
                <div className="login-container mx-3">
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                    <ToastContainer />
                    <form onSubmit={(event) => LoginHandler(event)}>
                        {/* <form> */}
                        <div className="login-content ">
                            <div className="col-12 text-login mt-2">Login</div>
                            {/* <p>Username: {username}</p> */}
                            {msg && msg ? <>
                                <p style={{ color: "red", fontSize: "0.8rem" }}>! {msg}</p>

                            </> : <></>}
                            <div className="col-12 form-group login-input">
                                <label>User name</label>
                                <input
                                    onChange={(event) => handeluserName(event)}
                                    type="text"
                                    className="form-control"
                                    required
                                    placeholder="Enter your userName"
                                />
                            </div>
                            <div className="col-12 form-group login-input">
                                <label>Password</label>
                                <div className="custom-eye">
                                    <input className="form-control"
                                        onChange={(event) => handelPassword(event)}

                                        type="password"
                                        required
                                        placeholder="Enter your password" />
                                    {/* <span onClick={() => this.handelShowHidePassword()}>
                        <i
                          className={
                            this.state.isshowpass ? "far fa-eye" : "far fa-eye-slash"
                          }
                        ></i>
                      </span>  */}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="col-12"></div>
                                <button className="btn-login" type="submit">Login</button>
                            </div>
                            <div className="col-12 d-flex      justify-content-between">
                                <a className="forgot-password">Forgot your password?</a>
                                <Link href={"/signup"} className="forgot-password mr-1">Sign up now</Link>

                            </div>
                            <div className="col-12 text-center mt-3">
                                <span className="text-center">Or login with</span>
                            </div>
                            <div className="col-12 social-login">
                                <i className="fab fa-google google"></i>
                                <i className="fa-brands fa-google"></i>
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fab fa-facebook-f facebook"></i>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* </MyContextProvider> */}

        </>
    )
}
