import { useContext } from "react";
import logoImage from "../assets/logo.jpg";
import Button from "./Button";
import CartContext from "../store/CartContext";
export default function Header() {
  const { items } = useContext(CartContext);
  const totalItemsInCart = items.reduce((toatlNoOfItems, item) => {
    return toatlNoOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="Foodify Logo" />
        <h1>Foodify</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalItemsInCart})</Button>
      </nav>
    </header>
  );
}
