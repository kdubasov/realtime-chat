import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../contexts/UserAuthContext";

const NavbarTop = () => {

    const { user } = useUserAuth();

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand>
                        QuickChat
                    </Navbar.Brand>
                </Link>

                <Nav className="me-auto">
                    {
                        user &&
                        <>
                            <Link className={"mx-2 text-white small"} to={"/myChats"}>Мои чаты</Link>
                            <Link className={"mx-2 text-white small"} to={"/userProfile"}>Личный кабинет</Link>
                        </>
                    }

                    {!user && <Link className={"text-white"} to={"/login"}>Войти в аккаунт</Link>}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;
