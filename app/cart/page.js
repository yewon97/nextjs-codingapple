import { age } from './data';

export default function CartPage() {
  let cart = ['tomatoes', 'pasta'];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {cart.map((food, i) => (
        <CartItem food={food} key={i} />
      ))}
    </div>
  );
}

function CartItem(cart) {
  return (
    <div className="cart-item">
      <p>{cart.food}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
