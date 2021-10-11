import { NavLink } from "react-router-dom";
import '../css/nav.css';
import keychain from '../img/keychain.png'

function Nav() {
    return (
        <div className="nav">
            <ul>
                <li><img className="icon" src={keychain} alt="Could not be loaded" /></li>
                <li><NavLink exact={true} activeStyle={{color:'gold'}} className="link" to="/">Home</NavLink></li>
                <li><NavLink exact={true} activeStyle={{color:'gold'}} className="link" to="/keychain">Login Keychain</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav
