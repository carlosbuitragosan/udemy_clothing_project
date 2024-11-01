import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItem = () => clearItemFromCart(cartItem);
  const decreaseItem = () => removeItemFromCart(cartItem);
  const increaseItem = () => addItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItem}>
          &#8722;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItem}>
          &#43;
        </div>
      </span>
      <span className="price">£{price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
