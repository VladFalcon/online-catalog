import React, {useContext, useState} from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, CATALOG_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(CATALOG_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className={isLogin ? "p-5 bg-light " : "p-5 bg-warning "}>
                <h2 className={isLogin ? "m-auto text-success" : "m-auto text-danger"}>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Sign up</NavLink> please!
                            </div>
                            :
                            <div>
                                Already have an account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink> please!
                            </div>
                        }

                        <Button
                            onClick={click}
                            variant={isLogin ? 'outline-success' : 'outline-danger'}
                        >
                            {isLogin ? 'Sign in' : 'Sign up'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;