import React from "react";

const ChatRoom = (props) => {
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
          height: "16.8rem",
        }}
      >
        이 채팅은 ({props.name})채팅방의 채팅내용입니다.
      </div>
      <div style={{ flexBasis: "1rem", display: "flex" }}>
        <input
          style={{ flex: "1" }}
          type="text"
          size="70"
          placeholder="채팅을 입력하세요"
        ></input>
        <button
          style={{
            backgroundColor: "lightgray",
            marginTop: "0",
            width: "8rem",
          }}
        >
          send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
