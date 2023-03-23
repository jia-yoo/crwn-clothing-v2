
import { useSelector, useDispatch } from 'react-redux'


import { selectIsCartOpenInSlice, selectTotalQuantity } from '../../store/cart/cart.selector'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles'
import { setIsCartOpen } from '../../store/cart/cart.action'



const CartIcon = () => { 
    const dispatch = useDispatch()


    const isCartOpen = useSelector(selectIsCartOpenInSlice)
    const totalQuantity = useSelector(selectTotalQuantity)
    const handleClick = () => dispatch(setIsCartOpen(!isCartOpen))

    return (
        
        <CartIconContainer onClick={handleClick}>
            
            <ShoppingIcon/>
            <ItemCount>{ totalQuantity }</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon