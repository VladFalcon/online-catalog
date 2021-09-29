import React, {useContext} from 'react';
import UserStore from "../store/UserStore";
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import empty from "../assets/empty.png"
import Image from "react-bootstrap/Image";
import basket from "../assets/basket.png";


const NavBar = observer(() => {
    const{user} = useContext(Context);
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        history.push(LOGIN_ROUTE)
    }

    return (
    <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Aircraft Spare Parts</Navbar.Brand>
            <Form inline className="mr-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
            {user.isAuth ?
                <Nav className="ml-auto">
                    {/*<Image variant="outline-light"*/}
                    {/*        className="mr-sm-2"*/}
                    {/*       src={basket}*/}
                    {/*/>*/}
                    {/*    /!*<Image width={50} height={50} src={empty}/>*!/*/}
                    <Button variant="outline-light"
                            className="mr-sm-2"
                            nClick={() => history.push(BASKET_ROUTE)}
                    >
                        Cart
                    </Button>

                    <Button variant="outline-light"
                            onClick={() => history.push(ADMIN_ROUTE)}
                            className="mr-sm-2"
                    >
                        Admin
                    </Button>
                    <Button variant="outline-light"
                            onClick={() => logOut()}
                            className="mr-sm-2"
                    >
                        Log Out
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button variant="outline-light" onClick={() => history.push(LOGIN_ROUTE)} className="mr-sm-2">Sign In</Button>
                </Nav>
            }
    </Navbar>

    );
});

export default NavBar;