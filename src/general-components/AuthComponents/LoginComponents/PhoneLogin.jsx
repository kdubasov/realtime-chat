import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Form, Alert, Container} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../../contexts/UserAuthContext";

//phone input

const PhoneLogin = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (!number) return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || !otp) return;
    try {
      await result.confirm(otp);
      navigate("/userProfile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
      <Container className="Login phone">

        <div className={"w-100"}>
          {error && <Alert className={"alert-phone-error"} variant="danger">{error}</Alert>}
        </div>

        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>

          <div className={`phone-input-block`}>
            <input
                value={number}
                onChange={e => setNumber(e.target.value)}
                placeholder={"Введите номер телефона"}
            />
          </div>

            <div id="recaptcha-container" className={"mb-3"} />

            <div className={'buttons-container'}>
              <Link to="/login">
                <Button variant="secondary" className={"m-0"}>
                  Назад
                </Button>
              </Link>

              <Button style={{height:"auto"}} variant={"primary"} type="submit">
                Получить код
              </Button>
            </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>

          <input
              className={`otp-input mb-3`}
              style={{marginLeft:0}}
              type="otp"
              placeholder={"Введите код"}
              onChange={(e) => setOtp(e.target.value)}
          />

          <div className="buttons-container">
            <Link to="/login">
              <Button className={"m-0"} variant="secondary">
                Отменить
              </Button>
            </Link>

            <Button type="submit" variant="primary" style={{height:"auto"}}>
              Подтвердить
            </Button>
          </div>

        </Form>
      </Container>
  );
};

export default PhoneLogin;
