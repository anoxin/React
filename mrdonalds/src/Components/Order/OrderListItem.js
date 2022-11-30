import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { formatCurrency, totalPriceItem } from '../Functions/secondaryFunction';



let OrderItemStyled = styled.li`
position: relative;
display: flex;
margin: 15px 0 38px;
&:after {
  content: "";
  position: absolute;
  top: 30px;
  left: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #9A9A9A;
}
`;

const toppings = (str) => (
  OrderItemStyled = styled.li`
    position: relative;
    display: flex;
    margin: 15px 0 38px;
    &:after {
      content: "${str}";
      position: absolute;
      top: 30px;
      left: 0;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #9A9A9A;
}
`
);


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

export const OrderListItem = ({ order }) => {
  const strToppings = order.toppings.filter(item => item.checked).map(item => item.name).join(", ");
  toppings(strToppings);
  return (
    <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItem(order))}</ItemPrice>
      <TrashButton />
    </OrderItemStyled >
  );
}