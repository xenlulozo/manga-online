// // Imports
// import { useState, useEffect, useRef } from "react";
// // import { login } from "../store/store";
// import { useDispatch } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import styled from "styled-components";
// // import axios from "../api/axios";

// // Login api URL
// const LOGIN_URL = "token/obtain/";

// // Action Login component
// function Login() {
//   // aT for checking whether user is logged in or not!
//   const aT = useSelector((state) => state?.user?.userAccessToken);

//   // useRef
//   const inputRef = useRef(null);

//   // states for the UserName and PassWord
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // state for the response message
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   // const for react-router-dom hooks
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // To reset message
//   useEffect(() => {
//     setMsg("");
//   }, [username, password]);

//   // UseEffect to navigate user to dashboard if logged in!
//   useEffect(() => {
//     window.scrollTo(0, document.body.scrollHeight);
//     inputRef.current.focus();
//     if (aT) {
//       navigate("/dashboard");
//     }
//   }, []);
//   // Setting the history
//   const from = location.state?.from?.pathname || "/dashboard";

//   // Functino to handle submit of the login form
//   const LoginHandler = async (e) => {
//     e.preventDefault();
//     setMsg("");
//     setLoading(true);
//     let res = "";

//     try {
//       const response = await axios.post(
//         LOGIN_URL,
//         JSON.stringify({ username, password }),
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       dispatch(
//         login({
//           username: username,
//           accessToken: response?.data?.access,
//         })
//       );
//       res = "Login Successful!";
//       if (from !== "") {
//         navigate(from, { replace: true });
//       } else {
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       if (!err?.response) {
//         res = "NO SERVER RESPONSE!";
//       } else if (err.response?.status === 401) {
//         res = "PROVIDE VALID CREDENTIALS!";
//       } else {
//         res = "SOMETHING WENT WRONG!";
//       }
//     } finally {
//       setLoading(false);
//       setMsg(res);
//     }
//   };

//   return (
//     // <Section id="login">
//     //   <LoginWrapper>
//     //     <LoginForm>
//     //       <Responses>
//     //         <Message> {msg} </Message>
//     //         <Loading className={loading ? "active rotate" : ""}>⚙️</Loading>
//     //       </Responses>
//     //       <H1>LOGIN</H1>
//     //       <Form onSubmit={LoginHandler}>
//     //         <InputPair>
//     //           {/* <Label htmlFor="name">Username</Label> */}
//     //           <Input
//     //             ref={inputRef}
//     //             type="text"
//     //             name="name"
//     //             autoComplete="off"
//     //             onChange={(e) => setUsername(e.target.value)}
//     //             placeholder="Username"
//     //             required
//     //           />
//     //         </InputPair>
//     //         <InputPair>
//     //           {/* <Label htmlFor="password">Password</Label> */}
//     //           <Input
//     //             type="password"
//     //             name="password"
//     //             onChange={(e) => setPassword(e.target.value)}
//     //             placeholder="Password"
//     //             required
//     //           />
//     //         </InputPair>
//     //         <Button>Login</Button>
//     //       </Form>
//     //     </LoginForm>
//     //   </LoginWrapper>
//     // </Section>
//   );
// }

// export default Login;
