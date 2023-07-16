import { useEffect } from "react"
import { data } from 'autoprefixer';


export default function Login() {
    useEffect(() => {

        // const fetchImageNames = async () => {

        //     try {
        //         const data = { username: "hieu", password: "1" }
        //         const url = "https://manga-online-six.vercel.app/api/login";
        //         const response = await fetch(url, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(data),
        //         });

        //         const result = await response.json();


        //         console.log(result);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };

        // fetchImageNames()
    }, [])
    return (
        <>
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content border-bottom">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>User name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password</label>
                            <div className="custom-eye">
                                <input className="form-control" placeholder="Enter your password" />
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
                            <button className="btn-login">Login</button>
                        </div>
                        <div className="col-12">
                            <a className="forgot-password">Forgot your password?</a>
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
                </div>
            </div>

        </>
    )
}
