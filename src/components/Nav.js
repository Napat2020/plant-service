import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from "../firebase/config";

const Nav = (props) => {
    const [userState, setuserState] = useState(null);

    const logout = () => {
        console.log("user is logged out");
    }

    let buttons;
    if(userState != null){
        buttons = (
            <React.Fragment>
                <li><button className="logout" onClick={logout}>LogOut</button></li>
            </React.Fragment>
        );
    }else{
        buttons = (
            <React.Fragment>
                <li><Link to="/signin">SignIn</Link></li>
                <li><Link to="/login">LogIn</Link></li>
            </React.Fragment>
        )    
    }

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">ReactFirebaseHooks</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/create">New Post</Link>
                </li>
                {buttons}
            </ul>
        </nav>
    )

}

export default withRouter(Nav);


