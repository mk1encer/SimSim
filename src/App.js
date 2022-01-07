import React,{useReducer,useEffect} from "react";
import {Routes,Route, useNavigate} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import RoomList from "./components/RoomList";
import AddRoom from "./components/AddRoom";
import ChatRoom from "./components/ChatRoom";
import SignUp from "./components/SignUp";
import {auth} from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  let navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        alert("Login");
        navigate("/roomlist");
      }
      else{
        alert("Logout");
        navigate("/");
      }
    });
  },[]);

  return (
      <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>      
          <Route path="/roomlist" element={<RoomList/>}/>
          <Route path="/addroom" element={<AddRoom/>}/>
          <Route path="/chatroom/:room" element={<ChatRoom/>}/>


        </Routes>
      </div>
  );
}