import React from "react";
import {Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import UserData from "./UserData";
import AddUserData from "./AddUserData";
import {useGetUser} from "../../../functions/Auth/useGetUser";
import UserDataDB from "./UserDataDB";


const UserProfile = () => {

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  //user data from database
  const userDbData = useGetUser(user.uid);
  console.log(userDbData)

  if(user){
    return (
        <Container className={'UserProfile'}>

          <h4 className={"my-4 fw-bolder"}>
            Личный кабинет
          </h4>


          <UserData user={user} handleLogout={handleLogout} />
          {
            !Object.values(userDbData).length ?
                <AddUserData user={user} />:
                <UserDataDB data={userDbData} />
          }

        </Container>
    );
  }
};

export default UserProfile;
