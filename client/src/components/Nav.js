import { NavLink } from "react-router-dom";
import '../css/nav.css';
import keychain from '../img/keychain.png'

function Nav() {
    return (
        <div className="nav">
            <ul>
                <li><img className="icon" src={keychain} alt="Could not be loaded" /></li>
                <li><NavLink exact={true} activeStyle={{color:'gold', borderBottom: '1px solid'}} className="link" to="/">Home</NavLink></li>
                <li><NavLink exact={true} activeStyle={{color:'gold', borderBottom: '1px solid'}} className="link" to="/keychain">Add Accounts</NavLink></li>
                <li><NavLink exact={true} activeStyle={{color:'gold', borderBottom: '1px solid'}} className="link" to="/results">Your Logins</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav
