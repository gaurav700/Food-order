import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/CurrencyFormatter";
import Button from "./Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { progress, hideCart } = useContext(UserProgressContext);
  const { items, addItem, removeItem } = useContext(CartContext);
  const totalCartItems = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    hideCart();
  }

  return (
    <Modal className="cart" open={progress === "cart"}>
      <h2>Your cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            key={item.id}
            onInc={() => addItem(item)}
            onDec={() => removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalCartItems)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={handleCloseCart}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
