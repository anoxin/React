export const totalPriceItem = order => {
  const countTopping = order.toppings && order.toppings.filter(item => item.checked).length;
  const priceTopping = (order.price * 0.1) * countTopping;
  return (order.price + priceTopping) * order.count;
}

export const formatCurrency = (value) => {
  return value.toLocaleString('ru-RU',
    { style: 'currency', currency: 'RUB' })
}