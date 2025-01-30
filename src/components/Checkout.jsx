import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/CurrencyFormatter";
import Input from "./Input";
import Button from "./Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./Modal";
export default function Checkout() {
  const { items } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);

  const cartTotal = items.reduce(
    (totalPrice, item) => item.price * item.quantity + totalPrice,
    0
  );

  function handleClose() {
    hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
  }

  return (
    <Modal open={progress === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="fullname" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p>
          <Button textOnly type="button" onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
