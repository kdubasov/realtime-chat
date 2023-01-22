import React from 'react';
import {Route, Routes} from "react-router-dom";
import Rooms from "./pages/Rooms/Rooms";
import {Container} from "react-bootstrap";
import Chat from "./pages/Chat/Chat";

const Router:React.FC = () => {
    return (
        <Container className={"Router"}>
            <Routes>
                <Route path={"/"} element={<Rooms />} />
                <Route path={"/chat"} element={<Chat />} />
            </Routes>
        </Container>
    );
};

export default Router;
