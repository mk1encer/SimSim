import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { ref, onChildAdded,onChildChanged, onValue, push,update,child } from "firebase/database";

const ChatRoom = (props) => {
  const [msg, setMsg] = useState("");
  const [roomid, setRoomid] = useState("");
  const [chats,setChats]=useState([]);

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

    if (roomid !== "") {
      return update(child(ref(db, "/chatRooms/" + roomid + "/message"),data.id), {
        id:data.id,
        message: data.message,
        timestamp: data.timestamp,
        uid: data.uid,
      });
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const key = push(ref(db,'/chatRooms/'+roomid+"/message")).key;
    try {
      await sendChat({
        id:key,
        message: msg,
        timestamp: new Date(Date.now()),
        uid: auth.currentUser.uid,
      });
      setMsg('');
    } catch (error) {
      console.log(error);
    }
  };

  function getChats(){
    const temp = ref(db, "/chatRooms/"+roomid+"/message/");
    let chats=[];

    onChildAdded(temp, (DataSnapshot) => {
      chats.push(DataSnapshot.val());
      setChats(chats);
    });
    return chats;
  }

  const getChatList=()=>{
    const chatList=getChats();
    setChats(chatList);
  };

  useEffect(()=>{
    try{
      onChildAdded(ref(db, "/chatRooms"),getChatList);
      onChildChanged(ref(db, "/chatRooms"),getChatList);
    }catch(error){
      console.log(error);
    }
  },[roomid]);

  const renderChat = (chats) =>
    chats.length > 0 &&
    chats.map((msg) => (
      <li
        style={{ 
          textAlign: (auth.currentUser.uid===msg.uid ? "right":"left"), 
          listStyleType: "none",
          marginLeft:"10px",
          marginRight:"10px"
        }}
        key={msg.id}
      >
      {msg.message}
      <p style={{
        fontSize:"13px",
        textAlign: (auth.currentUser.uid===msg.uid ? "right":"left"),
        }}>{msg.timestamp}</p>
      </li>
    ));

  return (
    <div
      style={{
        flexShrink: "1",
        display: "flex",
        flexDirection: "column", 
        backgroundColor: "white",
      }}
    >
      여기는 "{props.name}" 채팅방입니다.
      <div style={{overflowY:"scroll",height: "18.5rem"}}>
        <ul>
        {renderChat(chats)}
        </ul>
      </div>
      <div>
        <form
          style={{ flexBasis: "1rem", display: "flex" }}
          onSubmit={handleOnSubmit}
        >
          <input
            style={{ flex: "1" ,textAlign:"left"}}
            type="text"
            size="70"
            placeholder=" 채팅을 입력하세요"
            value={msg}
            onChange={handleOnChange}
          />&nbsp;&nbsp;&nbsp;
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
