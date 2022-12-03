import React from 'react';
import {Container} from "react-bootstrap";
import {Route,Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {UserAuthContextProvider} from "./contexts/UserAuthContext";
import UserProfile from "./general-components/AuthComponents/UserProfile/UserProfile";
import ProtectedAuthRoute from "./general-components/AuthComponents/ProtectedAuthRoute";
import Login from "./general-components/AuthComponents/LoginComponents/Login";
import PhoneLogin from "./general-components/AuthComponents/LoginComponents/PhoneLogin";
import NavbarTop from "./general-components/NavbarTop/NavbarTop";
import ChatPage from "./pages/ChatPage";

const Router = () => {

    return (
        <UserAuthContextProvider>

            <NavbarTop />

            <Container className={"Router"}>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />

                    {/*auth routs*/}
                    <Route
                        path="/userProfile"
                        element={
                            <ProtectedAuthRoute>
                                <UserProfile />
                            </ProtectedAuthRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/phoneLogin" element={<PhoneLogin />} />

                    {/*chat page*/}
                    <Route path="/chat/:userUid" element={<ChatPage />} />
                </Routes>
            </Container>
        </UserAuthContextProvider>
    );
};

export default Router;
