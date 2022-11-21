import React from 'react'
import styled from 'styled-components';
import { ButtonCheckOut } from './ButtonCheckOut';

const Overlay = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0, .5);
z-index: 20;
`;

const Modal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #fff;
color: black;
width: 600px;
height: 450px;
`;

const Banner = styled.div`
height: 200px;
width: 100%;
background-image: url(${({ img }) => img});
background-size: cover;
background-position: center;
`;

const Content = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: calc(100% - 200px);
padding: 30px;
`;

const HeaderContent = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;

const MenuText = styled.p`
font-family: 'Pacifico', cursive;
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 53px;
color: #000000;
`;


export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay")
      setOpenItem(null)
  }
  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <MenuText>{openItem.name}</MenuText>
            <MenuText>{openItem.price.toLocaleString('ru-RU',
              { style: 'currency', currency: 'RUB' })}</MenuText>
          </HeaderContent>
          <ButtonCheckOut >Добавить</ButtonCheckOut>
        </Content>

      </Modal>
    </Overlay>

  )

}