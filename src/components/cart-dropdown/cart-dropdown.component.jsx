import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import { Fragment } from "react";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const handleClick = () => setIsCartOpen(!isCartOpen);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => { 
    navigate('/checkout')
  }

  return (
    <Fragment>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
       
          <Button onClick={ goToCheckoutHandler }>GO TO CHECKOUT</Button>
      
        
      </div>
     
    </Fragment>
  );
};

export default CartDropdown;
