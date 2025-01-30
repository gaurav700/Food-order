import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/CurrencyFormatter";
import Button from "./Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Cart() {
  const { progress } = useContext(UserProgressContext);
  const { items } = useContext(CartContext);
  const totalCartItems = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return (
    <Modal className="cart" open={progress === "cart"}>
      <h2>Your cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalCartItems)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
