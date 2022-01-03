import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "./Auth";

function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleOnChange = (e) => {
        const type = e.target.name;
        if (type === "email") {
          setEmail(e.target.value);
        } else if (type === "password") {
          setPassword(e.target.value);
        }
      };
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            try {
            await signUp(email, password);
            } catch (error) {
            console.log(error);
            }
        }
    };
    return (
        <div className="sign-container">
            <div className="sign-up-wrap">
                <h1 className="title">회원가입</h1>
                <form onSubmit={handleOnSubmit}>
                    <div className="sign-form" >
                    <input
                    type="email"
                    placeholder="이메일"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    />
                    </div>
                    <div className="sign-form" >
                    <input
                    type="password"
                    placeholder="비밀번호"
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    />
                    </div>
                    <div>
                        <button type="submit">회원가입</button>
                    </div>
                </form>
        </div>
    </div>
)
}
export default SignUp;