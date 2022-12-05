import React from 'react'
import styled from 'styled-components';
import { ButtonCheckOut } from './ButtonCheckOut';
import { OrderListItem } from './OrderListItem';
import { formatCurrency, totalPriceItem } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
position: fixed;
display: flex;
flex-direction: column;
top: 80px;
left: 0;
background: #fff;
min-width: 380px;
height: calc(100% - 80px);
box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
padding: 20px;
`;

const OrderTitle = styled.h2`
text-align: center;
margin-bottom: 30px;
`;

const OrderContent = styled.div`
flex-grow: 1;

`;

const OrderList = styled.ul``;

const Total = styled.div`
display: flex;
margin: 0 35px 30px;
& span:first-child { 
  flex-grow: 1;
}
`;

const TotalPrice = styled.span`
text-align: right;
min-width: 65px;
margin-left: 20px;
`;

const EmtyList = styled.p`
text-align: center;
`;

export const Order = ({ orders, setOrders, setOpenItem }) => {
  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  }


  const total = orders.reduce((result, order) => totalPriceItem(order) + result, 0);
  const count = orders.reduce((result, order) => order.count + result, 0);
  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        {orders.length ?
          <OrderList>
            {orders.map((order, index) => <OrderListItem
              key={index}
              order={order}
              deleteItem={deleteItem}
              index={index}
              setOpenItem={setOpenItem} />)}
          </OrderList> :
          <EmtyList>Список заказов пуст</EmtyList>}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{count}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <ButtonCheckOut>Оформить</ButtonCheckOut>
    </OrderStyled>
  )
}