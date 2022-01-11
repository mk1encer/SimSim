import React, { useState } from "react";
import { auth, db } from "../Firebase";
import { ref, set, onValue, push } from "firebase/database";

const ChatRoom = (props) => {
  const [msg, setMsg] = useState("");
  const [roomid, setRoomid] = useState("");

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };

  function sendChat(data) {
    const temp = ref(db, "/chatRooms/");
    const roomids = [];
    onValue(temp, (snapshot) => {
      const rooms = snapshot.val();
      for (let id in rooms) {
        roomids.push({ ...rooms[id] });
      }
    });

    for (let i in roomids) {
      if (roomids[i].name === props.name) {
        const temp = roomids[i].id;
        setRoomid(temp);
      }
    }

    if (roomid != "") {
      return push(ref(db, "/chatRooms/" + roomid + "/message"), {
        message: data.message,
        timestamp: data.timestamp,
        uid: data.uid,
      });
    }
  }

  const handleOnSubmit = async (e) => {
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

  return (
    <div
      style={{
        flexShrink: "1",
        display: "flex",
        flexDirection: "column",
        margin: "0.5rem",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          height: "15.5rem",
        }}
      >
        여기는 ({props.name})채팅방의 채팅내용입니다.
        <li
          style={{
            listStyle: "none",
            textAlign: "left",
            backgroundColor: "lightgreen",
          }}
        >
          hi! &nbsp; <span>05:54</span>
        </li>
        <li
          style={{
            listStyle: "none",
            textAlign: "right",
            backgroundColor: "lightsteelblue",
          }}
        >
          <span>05:56</span> &nbsp; hello
        </li>
      </div>
      <div>
        <form
          style={{ flexBasis: "1rem", display: "flex" }}
          onSubmit={handleOnSubmit}
        >
          <input
            style={{ flex: "1" }}
            type="text"
            size="70"
            placeholder="채팅을 입력하세요"
            value={msg}
            onChange={handleOnChange}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "lightgray",
              marginTop: "0",
              width: "6rem",
            }}
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
