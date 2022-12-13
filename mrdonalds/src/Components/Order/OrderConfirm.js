import React, { useContext } from "react";
import styled from "styled-components";
import { Overlay, OrderTitle, Total, TotalPrice } from "../Style/StyleComponent";
import { ButtonCheckOut } from '../Order/ButtonCheckOut';
import { formatCurrency, totalPriceItem, projection } from '../Functions/secondaryFunction';
import { Context } from "../Functions/context";

const Modal = styled.div`
background-color: white;
width: 600px;
padding: 30px;`;

const Text = styled.h3`
text-align: center;
margin-bottom: 30px;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  toppings: ['topping', array => array.filter((obj) => obj.checked).map(obj => obj.name), array => array.length ? array : 'no topping'],
  choices: ['choice', item => item ? item : 'no choices']
}

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData))
  dataBase.ref('orders').push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder
  });

}

export const OrderConfirm = () => {
  const {
    orders: { orders, setOrders },
    auth: { authentication },
    orderConfirm: { setOpenOrderConfirm },
    orderThank: { setOpenOrderThank },
    firebaseDatabase
  } = useContext(Context);
  const dataBase = firebaseDatabase();
  const total = orders.reduce((result, order) => totalPriceItem(order) + result, 0);
  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Осталость только подтвердить заказ</Text>
        <Total >
          <span>итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonCheckOut onClick={() => {
          sendOrder(dataBase, orders, authentication);
          setOrders([]);
          setOpenOrderConfirm(false);
          setOpenOrderThank(true);
          setTimeout(() => setOpenOrderThank(false), 3000)
        }}>Подтвердить</ButtonCheckOut>
      </Modal>
    </Overlay>
  )

}