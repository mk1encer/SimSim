import React,{useEffect} from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./components/Login";
import RoomList from "./components/RoomList";
import AddRoom from "./components/AddRoom";
import ChatRoom from "./components/ChatRoom";
import SignUp from "./components/SignUp";

function App() {

  return (
      <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/roomlist" element={<RoomList/>}/>
          <Route path="/addroom" element={<AddRoom/>}/>
          <Route path="/chatroom/:room" element={<ChatRoom/>}/>
        </Routes>
      </div>
  );
}

export default App;
