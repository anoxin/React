import styled from 'styled-components';

export const ButtonCheckOut = styled.button`
display: block;
margin: 0 auto;
padding: 20px 73px 20px 73px;
background: #299B01;
border-color: transparent;
width: min-content;
font-size: 21px;
line-height: 25px;
color: #FFFFFF;
transition-property: color, background-color, border-color;
transition-duration: .3s;
&:hover{
  background-color:#fff;
  color: #299B01;
  border-color: #299B01;
}
&:disabled {
  color: #bbb;
  background-color: #ccc;
  border-color: #aaa;
}
`;