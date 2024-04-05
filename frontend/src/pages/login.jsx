import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import img from "../images/stockmarket.jpeg";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Login = () => {
  const { user, getUser, isLoading } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  }, []);

  useLayoutEffect(() => {
    user.status ? navigate("/") : null;
  }, [user]);
  return isLoading ? (
    <Loading />
  ) : (
    <LoginStyled>
      <LoginForm />
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default Login;
