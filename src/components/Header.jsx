import { useContext } from "react";
import logoImage from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
export default function Header() {
  const { showCart } = useContext(UserProgressContext);
  const { items } = useContext(CartContext);

  const totalItemsInCart = items.reduce((toatlNoOfItems, item) => {
    return toatlNoOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="Foodify Logo" />
        <h1>Foodify</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalItemsInCart})
        </Button>
      </nav>
    </header>
  );
}
