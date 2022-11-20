import React from 'react'
import styled from 'styled-components';

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
padding-bottom: 43px;
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
margin-bottom: center;


`;

const Container = styled.div`
width: 100%;
`;

const AboutItem = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding: 20px 53px 43px 37px;
`;

const MenuText = styled.p`
font-family: 'Pacifico';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 53px;
color: #000000;
`;

const Button = styled.button`
padding: 20px 73px 20px 73px;
background: #299B01;
border: none;
width: min-content;
font-size: 21px;
line-height: 25px;
color: #FFFFFF;
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
        <Container>
          <Banner img={openItem.img} />
          <AboutItem>
            <MenuText>{openItem.name}</MenuText>
            <MenuText>{openItem.price.toLocaleString('ru-RU',
              { style: 'currency', currency: 'RUB' })}</MenuText>
          </AboutItem>
        </Container>
        <Button>Добавить</Button>

      </Modal>
    </Overlay>

  )

}