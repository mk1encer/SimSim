import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import RoomList from "./components/RoomList";
import ChatRoom from "./components/ChatRoom";
import SignUp from "./components/SignUp";
import { PrivateRoute,PublicRoute } from "./components/Auth";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/roomlist" element={<RoomList />} />
          <Route path="/chatroom/:room" element={<ChatRoom />} />
        </Route>
      </Routes>
    </div>
  );
}
