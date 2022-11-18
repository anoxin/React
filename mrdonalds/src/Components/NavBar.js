import React from 'react'
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import logoIn from '../image/sign.svg';

const NavBarStyled = styled.header`
position: flex;
top: 0;
left: 0;
z-index: 999;
height: 80px;
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
background-color: #299B01;
color: white;
`;

const Logo = styled.div`
display: flex;
align-items: center;
`;

const H1 = styled.h1`
font-size: 24px;
margin-left: 15px;
`;

const ImgLogo = styled.img`
width: 50px;
`;

const Login = styled.a`
display: flex;
flex-direction: column;
align-items: center;
`;

const LoginIcon = styled.img`
margin-bottom: 3px;
`
  ;

const LoginIn = styled.span`
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
`;
export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>mrDonalds</H1>
    </Logo>
    <Login href='#'>
      <LoginIcon src={logoIn} alt="logoIn" />
      <LoginIn>войти</LoginIn>
    </Login>
  </NavBarStyled >
)