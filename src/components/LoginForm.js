import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";

const Login_form = () => {

    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    //const [jwt, setJwt] = useLocalState("", "jwt");

    function sendLoginRequest() {
        console.log(useremail);
        console.log(password);
        const reqBody = {
            useremail: useremail,
            password: password,
        };

        /*
        fetch("api/auth/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
        .then((response) => {
        if(response.status === 200)
            return Promise.all([response.json(), response.headers]);
        else return Promise.reject("Invalid login attempt");
         })
        .then(([body, headers]) => {
            setJwt(headers.get("authorization"));
        })
        .then(([body, headers]) => {
            setJwt(headers.get("authorization"));
            window.location.href = "redirect_page";
        })
        .catch((message) => {
            alert(message);
        });
        */
        
    }

    return (
        <>
        <div className="container">
            <form>
                <label>Enter your email:</label><br />
                <input type="text" id="useremail" className="form-control" value={useremail} onChange={(e) => setUseremail(e.target.value)} placeholder="Enter your email ID" required /><br />
                <label>Enter your password:</label><br />
                <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required /><br />
                <center><button type="button" className="btn btn-success" onClick={() => sendLoginRequest()}>Login</button></center>
            </form>
        </div>
        </>
    )
}
export default Login_form