import { useSelector, useDispatch } from 'react-redux';


import { CheckoutItemContainer, ImageContainer, RemoveButton, BaseSpan, Quantity, Arrow, Value } from './checkout-item.styles'
import { selectCartItemsInSlice } from '../../store/cart/cart.selector';
import { addItemToCart,clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';


const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItemsInSlice)
    const { name, imageUrl, price, quantity } = cartItem;

    
    const clearItemHandler = () => { return dispatch(clearItemFromCart(cartItems, cartItem)) }
    const addItemHandler = () => { return dispatch(addItemToCart(cartItems,cartItem)) }
    const removeItemHandler = () => { return dispatch(removeItemFromCart(cartItems,cartItem)) }
        
    return (
        <CheckoutItemContainer>
            <ImageContainer>
            <img src={imageUrl} alt={`${name}` } />
            </ImageContainer>
            <BaseSpan className='name'>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                &#10094; </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                &#10095; </Arrow>
            </Quantity>  
            <BaseSpan className='price'>${price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>

    </CheckoutItemContainer>
    )
 }

export default CheckoutItem