import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { MouseEvent, useState } from "react";

function App() {
  let products = ["Orange Juice", "Bread", "Chocolate", "Apple Juice"];
  const [shoppingList, setShoppingList] = useState([0, 0, 0, 0]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [checkedOut, setCheckedOut] = useState(false);

  function handleCheckout() {
    for (let i = 0; i < shoppingList.length; i++) {
      if (shoppingList[i] > 0) {
        setCheckedOut(true);
        return;
      }
    }
  }

  function addItem() {
    if (selectedIndex > -1) {
      shoppingList[selectedIndex]++;
    }
    console.log(shoppingList);
  }

  function subtractItem() {
    if (shoppingList[selectedIndex] > 0 && selectedIndex > -1) {
      shoppingList[selectedIndex]--;
    }
    console.log(shoppingList);
  }

  function shoppingCart() {
    const shoppingCart: Array<JSX.Element> = [];
    for (let i = 0; i < shoppingList.length; i++) {
      if (shoppingList[i] > 0) {
        shoppingCart.push(
          <li>
            {products[i]}: {shoppingList[i]}
          </li>
        );
      }
      console.log(shoppingCart);
    }
    return (
      <>
        <h1>ShoppingCart</h1>
        {shoppingCart}
        <Button
          text={"Go back"}
          onClick={() => {
            setCheckedOut(false);
          }}
        ></Button>
      </>
    );
  }

  return (
    <div>
      {!checkedOut ? (
        <>
          <h1>Shopping List</h1>
          <ListGroup
            items={products}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <Button text={"-"} onClick={subtractItem} />
          <Button text={"+"} onClick={addItem} />
          <br></br>
          <br></br>
          <Button text={"Check out"} onClick={handleCheckout} />
        </>
      ) : (
        <>{shoppingCart()}</>
      )}
    </div>
  );
}

export default App;
