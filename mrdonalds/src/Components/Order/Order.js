import React from 'react'
import styled from 'styled-components';
import { ButtonCheckOut } from './ButtonCheckOut';
import { OrderListItem } from './OrderListItem';
import { formatCurrency, totalPriceItem, projection } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
position: fixed;
display: flex;
flex-direction: column;
top: 80px;
left: 0;
background: #fff;
width: 380px;
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

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  toppings: ['topping', array => array.filter((obj) => obj.checked).map(obj => obj.name), array => array.length ? array : 'no topping'],
  choices: ['choice', item => item ? item : 'no choices']
}

export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, dataBase }) => {

  const sendOrder = () => {
    const newOrder = orders.map(projection(rulesData))
    dataBase.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order: newOrder
    });

  }
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
      <ButtonCheckOut onClick={() => !authentication && orders.length ? logIn() : (() => { sendOrder(); setOrders([]) })()}>Оформить</ButtonCheckOut>
      {/* /* sendOrder(); */}
    </OrderStyled>
  )
}