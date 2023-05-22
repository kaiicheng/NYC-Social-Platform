// npm install sematic-ui-react semantic-ui-css react-router-dom
import { Menu, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";  // need use (BrwoserRouter) before using Link 

function Header() {

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
            <Menu.Item as={Link} to="/signin">Register/Login</Menu.Item>
        </Menu.Menu>
    </Menu>
}

export default Header;