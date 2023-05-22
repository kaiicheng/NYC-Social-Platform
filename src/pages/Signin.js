// https://www.youtube.com/watch?v=5jCTQx6TPTo&list=PLddLA9QpG2T2__tPfi6nwaL8Rf_wWQaz7&index=5

// use Menu, Form, Container from semantic-ui to create signin page
import {Menu, Form, Container} from "semantic-ui-react";

import React from "react";

function Signin() {
    // return "Hello, signing!";
    
    // constance to set default state (register or signin)
    const [activeItem, setActiveItem] = React.useState("register");

    // constance to set default state of email and password
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
        <Container>
            <Menu widths="2">
                <Menu.Item 
                    active={activeItem === "register"} 
                    onClick={() => setActiveItem("register")}
                    >
                    Register
                </Menu.Item>
                <Menu.Item 
                    active={activeItem === "signin"} 
                    onClick={() => setActiveItem("signin")}
                    >
                    Login
                </Menu.Item>
            </Menu>

            <Form>
                <Form.Input 
                    label="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Please enter email"
                    ></Form.Input>
                <Form.Input 
                    label="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Please enter password"
                    type="password"
                    ></Form.Input>
                <Form.Button>
                    {activeItem === "register" && "Register"}
                    {activeItem === "signin" && "Login"}
                </Form.Button>
            </Form>
        </Container>
    );
}

export default Signin;