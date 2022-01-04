import React, { useState } from "react";
import { signUp } from "./Auth";

export default function SignUp(){
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
                alert('회원가입에 성공했습니다.')
                document.location.href='/'
            } catch (error) {
                alert('비밀번호는 6자리 이상이어야 합니다.')
            }
        }
    };
    return (
        <div className="sign-wrap">
            <h2 className="title">회원가입</h2>
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
)
}