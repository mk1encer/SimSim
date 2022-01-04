import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="header">
            <Link to="/"><img src="img/logo.png"></img></Link>
        </div>
    );
}