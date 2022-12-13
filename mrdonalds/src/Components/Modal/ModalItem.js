import React, { useContext } from 'react'
import styled from 'styled-components';
import { Overlay } from '../Style/StyleComponent';
import { ButtonCheckOut } from '../Order/ButtonCheckOut';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency, totalPriceItem } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { Context } from '../Functions/context';



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


export const ModalItem = () => {
  const {
    openItem: { openItem, setOpenItem },
    orders: { orders, setOrders }
  } = useContext(Context);
  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices();
  const isEdit = openItem.index > -1;

  const closeModal = e => {
    if (e.target.id === "overlay") {
      setOpenItem(null)
    }
  }

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  }

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }



  return (
    <Overlay id="overlay" onClick={(e) => { closeModal(e) }}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <MenuText>{openItem.name}</MenuText>
            <MenuText>{formatCurrency(openItem.price)}</MenuText>
          </HeaderContent>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItem(order))}</span>
          </TotalPriceItem>
          <ButtonCheckOut
            onClick={isEdit ? editOrder : addToOrder}
            disabled={order.choices && !order.choice && !openItem.choice}>{isEdit ? "Редактировать" : "Добавить"}</ButtonCheckOut>
        </Content>

      </Modal>
    </Overlay >

  )

}