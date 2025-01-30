import { currencyFormatter } from "../util/CurrencyFormatter";

export default function CartItem({ name, quantity, price, onInc, onDec }) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDec}>-</button>
        <span>{quantity}</span>
        <button onClick={onInc}>+</button>
      </p>
    </li>
  );
}
