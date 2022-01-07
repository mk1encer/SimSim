import { logOut } from "./Auth";
import { Link } from "react-router-dom";
import styles from "../css/Logout.module.css";

export default function Logout(){
    return (
        <div>
            <button className={styles.buttonLogout} onClick={logOut}><Link className={styles.link} to="/">로그아웃</Link></button>
        </div>
    );
}