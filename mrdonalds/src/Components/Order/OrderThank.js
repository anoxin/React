import React from "react";
import styled from "styled-components";
import { Overlay, OrderTitle } from "../Style/StyleComponent";

const Modal = styled.div`
background-color: white;
width: 600px;
padding: 30px;`;

export const OrderThank = () => {
  return (
    <Overlay>
      <Modal>
        <OrderTitle>Спасибо за заказ!</OrderTitle>
      </Modal>
    </Overlay>
  )
}