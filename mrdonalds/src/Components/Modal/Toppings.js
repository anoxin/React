import React from "react";
import styled from "styled-components";

const ToppingWrap = styled.div`
max-width: 500px;
margin: 10px auto;
column-count: 2;
column-gap: 60px;`;

const ToppingLabel = styled.label`
cursor: pointer;
display: block;`;

const ToppingCheckbox = styled.input`
cursor: pointer;
margin-right: 5px;`;

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <h3>Добавки</h3>
      <ToppingWrap>
        {toppings.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheckbox type="checkbox" checked={item.checked} onChange={() => checkToppings(i)} />
            <span>{item.name}</span>
          </ToppingLabel>
        ))}
      </ToppingWrap >
    </>
  )

}