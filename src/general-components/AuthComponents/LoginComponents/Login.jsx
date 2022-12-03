import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../../contexts/UserAuthContext";


const Login = () => {

  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/userProfile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
      <div className="Login py-3">

          <h4>Авторизация</h4>

          <div className="buttons-container">
              <GoogleButton
                  className={"mb-2"}
                  type={"dark"}
                  onClick={handleGoogleSignIn}
              />

              <Link to="/phoneLogin">
                  <Button variant="primary" size={"sm"}>
                      Вход по номеру телефона
                  </Button>
              </Link>
          </div>

      </div>
  );
};

export default Login;
