"use client"
import { useEffect, useState } from "react"
import { data } from 'autoprefixer';
import 'bootstrap/dist/css/bootstrap.css';
import "./style-login.scss"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
    const { push } = useRouter()
    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [msg, setMsg] = useState("");

    const SignupHandler = async (e: any) => {
        const data = { userName: userName, password: password, rePassword: rePassword }
        e.preventDefault()

        try {
            const response = await axios.post("https://manga-online-six.vercel.app/api/auth/signup", data)

            const result = response.data;
            // console.log(result)
            // console.log(result.message);
            // console.log(result.statusCode);

            if (result.errCode === 1) {
                push("/login")
            }
            setMsg(result.message)


        } catch (error) {
            console.error(error);
        }
        finally {


        }
    };
    const handeluserName = (event: any) => {
        setuserName(event.target.value)
    }
    const handelPassword = (event: any) => {
        setPassword(event.target.value)
    }
    const handelRePassword = (event: any) => {
        setRePassword(event.target.value)
    }
    return (
        <>
            <div className="login-background">
                <div className="login-container mx-3">
                    <form onSubmit={(event) => SignupHandler(event)}>

                        <div className="login-content">
                            <div className="col-12 text-login">Sign up</div>
                            {
                                msg && msg ? <>
                                    <p style={{ color: "red", fontSize: "0.8rem" }}>! {msg}</p>
                                </> :
                                    <>

                                    </>
                            }
                            <div className="col-12 form-group login-input">
                                <label>User name</label>
                                <input
                                    onChange={(event) => handeluserName(event)}
                                    type="text"
                                    className="form-control"
                                    required
                                    placeholder="Enter your username"
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

                                </div>

                            </div>
                            <div className="col-12 form-group login-input">
                                <label>Repeat Password</label>
                                <div className="custom-eye">
                                    <input className="form-control"
                                        onChange={(event) => handelRePassword(event)}
                                        type="password"
                                        required
                                        placeholder="Enter your password" />

                                </div>
                            </div>


                            <div className="col-12 my-3">
                                <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                    required
                                />
                                <span className="mx-2">
                                    i agree to the <b> Terms of User</b>
                                </span>

                            </div>
                            <div className="col-12">
                                <button className="btn-login" type="submit">Sign up</button>
                            </div>
                        </div>
                    </form>


                </div>
            </div>

        </>
    )
}
