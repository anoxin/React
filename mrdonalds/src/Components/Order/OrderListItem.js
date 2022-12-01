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

export const OrderListItem = ({ orders, order, setOrders }) => {
  const strToppings = order.toppings.filter(item => item.checked).map(item => item.name).join(", ");
  const deleteItems = (e) => {

    setOrders(orders.filter(item => item.id !== +e.target.id))

  }

  return (
    <OrderItemStyled>
      <ItemName>{order.name} {order.choice}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItem(order))}</ItemPrice>
      <TrashButton id={order.id} onClick={(e) => deleteItems(e)} />
      {order.toppings && <Toppings>
        {strToppings}
      </Toppings>}
    </OrderItemStyled >
  );
}