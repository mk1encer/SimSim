import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signIn } from "./Auth";
import "../css/Login.css";
import { auth } from "../Firebase";

export default function Login() {
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
        await signIn(email, password).then((res) => {
          document.location.href = "/ROOMLIST";
        });
      } catch (error) {
        alert("이메일과 비밀번호를 다시 입력하세요.");
      }
    }
  };

  return (
    <div className="sign-wrap">
      <h2 className="title">로그인</h2>
      <form onSubmit={handleOnSubmit}>
        <div className="sign-form">
          <input
            type="email"
            placeholder="이메일"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div className="sign-form">
          <input
            type="password"
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
      <p className="sign-up">
        회원이 아니신가요? <Link to="/signup">회원가입</Link>
      </p>
    </div>
  );
}
