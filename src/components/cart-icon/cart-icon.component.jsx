import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles'

const CartIcon = () => { 
    const { isCartOpen, setIsCartOpen, totalQuantity } = useContext(CartContext)
    const handleClick = () => setIsCartOpen(!isCartOpen);

    return (
        
        <CartIconContainer onClick={handleClick}>
            
            <ShoppingIcon/>
            <ItemCount>{ totalQuantity }</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon