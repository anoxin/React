import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { formatCurrency, totalPriceItem } from '../Functions/secondaryFunction';



let OrderItemStyled = styled.li`
display: flex;
flex-wrap: wrap;
margin: 15px 0;
`;

const Toppings = styled.span`
display: inline-block;
margin-top: 5px;
width: 100%;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #9A9A9A;
`



const ItemName = styled.span`
flex-grow: 1;
cursor: pointer;
`;

const ItemPrice = styled.span`
margin-left: 20px;
margin-right: 10px;
min-width: 65px;
text-align: center;
`;

const TrashButton = styled.button`
width: 24px
height: 24px;
border-color: transparent;
background-color: transparent;
background-image: url(${trashImage});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
cursor: pointer;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
  const strToppings = order.topping.filter(item => item.checked).map(item => item.name).join(", ");
  const openMoldal = (e) => {
    if (e.target.localName !== "button") {
      setOpenItem({ ...order, index })
    }
  }


  return (
    <OrderItemStyled onClick={(e) => openMoldal(e)} >
      <ItemName>{order.name} {order.choice}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItem(order))}</ItemPrice>
      <TrashButton onClick={() => deleteItem(index)} />
      {order.toppings && <Toppings>
        {strToppings}
      </Toppings>}
    </OrderItemStyled >
  );
}