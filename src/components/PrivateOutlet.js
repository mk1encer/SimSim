import React from "react";
import {Outlet,Navigate} from "react-router-dom";

export default function PrivateOutlet(){
    const auth=true;
    return auth ? <Outlet/> :<Navigate to="/"/>;
}