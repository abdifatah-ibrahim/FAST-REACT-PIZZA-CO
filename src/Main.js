import Pizza from "./Pizza";
import pizzaData from "./data";
function Main() {
  console.log(pizzaData);
  return (
    <div className="menu">
      <h2>Oue Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza pizzaObject={pizza} />;
        })}
      </ul>
    </div>
  );
}
export default Main;
