function Pizza({ pizzaObject }) {
  const isSold = pizzaObject.soldOut ? "sold-out" : "";
  const priceSold = pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price;
  return (
    <li className={`pizza  ${isSold}`}>
      <img src={pizzaObject.photoName} alt="" />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{priceSold}</span>
      </div>
    </li>
  );
}
export default Pizza;
