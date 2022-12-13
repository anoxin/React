import React, { useContext } from 'react'
import styled from 'styled-components';
import { OrderTitle, Total, TotalPrice } from '../Style/StyleComponent';
import { ButtonCheckOut } from './ButtonCheckOut';
import { OrderListItem } from './OrderListItem';
import { formatCurrency, totalPriceItem } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

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

const OrderContent = styled.div`
flex-grow: 1;

`;

const OrderList = styled.ul``;


const EmtyList = styled.p`
text-align: center;
`;

export const Order = () => {
  const {
    orders: { orders, setOrders },
    openItem: { setOpenItem },
    auth: { authentication, logIn },
    orderConfirm: { setOpenOrderConfirm }
  } = useContext(Context)


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
      {orders.length ? <Total>
        <span>Итого</span>
        <span>{count}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total> : null}
      {orders.length ? <ButtonCheckOut onClick={() => !authentication && orders.length ? logIn() : (() => { setOpenOrderConfirm(true) })()}
      >Оформить</ButtonCheckOut> : null}
    </OrderStyled>
  )
}