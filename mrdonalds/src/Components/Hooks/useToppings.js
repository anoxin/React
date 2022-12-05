import { useState } from "react";

const getTopping = toppings => {
  if (toppings) {
    return toppings.map(item => ({
      name: item,
      checked: false
    }))
  } else {
    return [];

  }

}

export function useToppings(openItem) {
  const readyTopping = openItem.topping ? openItem.topping : getTopping(openItem.toppings);
  const [toppings, setToppings] = useState(readyTopping);

  const checkToppings = index => {
    setToppings(toppings.map((item, i) => {
      const newItem = { ...item }
      if (i === index) {
        newItem.checked = !newItem.checked;
      }
      return newItem;
    }))
  }
  return { toppings, checkToppings };
}