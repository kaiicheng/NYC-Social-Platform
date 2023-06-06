// npm install sematic-ui-react semantic-ui-css react-router-dom
import { Menu, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";  // need to use (BrwoserRouter) before using Link 

import React from "react";

import firebase from "./utils/firebase";

function Header() {

    // monitoring the state of signed or not
    // initializinig state, not sure signed or not => null
    const [user, setUser] = React.useState(null);
    // after signOut, the currentUser will become null
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
    }, []);

    // navbar
    // to="/" is homepage
    // click Register/Login leads to /signin
    // click Social Platform leads to homepage
    return <Menu>
        <Menu.Item as={Link} to="/">  
            Social Platform
        </Menu.Item>
        <Menu.Item>
            <Search/>
        </Menu.Item>
        <Menu.Menu position="right">
            {user ? (
                <>
                    <Menu.Item as={Link} to="/new-post">
                        Post
                    </Menu.Item>
                    <Menu.Item as={Link} to="/my">
                        Account
                    </Menu.Item>
                    {/* after signOut, the currentUser will become null */}
                    <Menu.Item onClick={() => firebase.auth().signOut()}>
                        Log out
                    </Menu.Item>
                    </>
                ) : (
                    <Menu.Item as={Link} to="/signin">
                        Register/Login
                    </Menu.Item>
                )}
            </Menu.Menu>
        </Menu>
    ;
}

export default Header;
