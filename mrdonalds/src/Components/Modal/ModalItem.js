import React from 'react'
import styled from 'styled-components';
import { ButtonCheckOut } from '../Order/ButtonCheckOut';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency, totalPriceItem } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings'



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

const TotalPriceItem = styled.div`
display: flex;
justify-content: space-between;
`;


export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount();
  const toppings = useToppings(openItem);

  const closeModal = e => {
    if (e.target.id === "overlay")
      setOpenItem(null)
  }

  const order = {
    ...openItem,
    count: counter.count,
    toppings: toppings.toppings
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <MenuText>{openItem.name}</MenuText>
            <MenuText>{formatCurrency(openItem.price)}</MenuText>
          </HeaderContent>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings} />}
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItem(order))}</span>
          </TotalPriceItem>
          <ButtonCheckOut onClick={addToOrder}>Добавить</ButtonCheckOut>
        </Content>

      </Modal>
    </Overlay >

  )

}