import React,{useState} from "react";
import {auth,db} from "../Firebase"

function sendChat(data) {
    return db.ref("chats").push({
      message: data.message,
      timestamp: data.timestamp,
      uid: data.uid,
    });
  }

export default function UI() {
    const [msg, setMsg] = useState("");

    const handleOnChange = (e) => {
      setMsg(e.target.value);
    };

    const handleSumbit = async (e) => {
      e.preventDefault();
      console.log(msg);
      try {
        await sendChat({
          message: msg,
          timestamp: Date.now(),
          uid: auth.currentUser.uid,
        });
      } catch (error) {
        console.log(error);
      }
    };

    <form onSubmit={handleSumbit}>
      <input
      placeholder="내용을 입력하세요."
      value={msg}
      onChange={handleOnChange}
      />
      <button type="submit">전송</button>
    </form>

    return (
      <div>
        <div className="chat-container">
      <div className="chat-top">헤더</div>
      <div className="chat-middle">
        <li className="chat-bubble send">
          <p>
            하이
          </p>
          <span>13:30PM</span>
        </li>
        <li className="chat-bubble receive">
          <p>방가방가!!</p>
          <span>13:31PM</span>
        </li>
      </div>
      <div className="chat-bottom">
        <form onSubmit={handleSumbit}>
          <input
            placeholder="내용을 입력하세요."
            value={msg}
            onChange={handleOnChange}
          />
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
      </div>
    );
  }
  