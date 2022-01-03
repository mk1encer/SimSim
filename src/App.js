<<<<<<< HEAD
import React,{useEffect} from "react";
import {Routes,Route} from "react-router-dom";
=======
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
>>>>>>> 3457dc6a78d81957766d31741043c3eb501c2429
import Login from "./components/Login";
import RoomList from "./components/RoomList";
import AddRoom from "./components/AddRoom";
import ChatRoom from "./components/ChatRoom";
<<<<<<< HEAD
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
=======

function SecureRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("nickname") ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  let location = useLocation();

  return (
    <Router>
      <div>
        <Navigate
          to={{
            pathname: "./roomlist",
            state: { from: location },
          }}
        />
        <Routes>
          <Route path="/login">
            <Login />
          </Route>
          <SecureRoute path="/roomlist">
            <RoomList />
          </SecureRoute>
          <SecureRoute path="/addroom">
            <AddRoom />
          </SecureRoute>
          <SecureRoute path="/chatroom/:room">
            <ChatRoom />
          </SecureRoute>
        </Routes>
      </div>
    </Router>
>>>>>>> 3457dc6a78d81957766d31741043c3eb501c2429
  );
}

export default App;
