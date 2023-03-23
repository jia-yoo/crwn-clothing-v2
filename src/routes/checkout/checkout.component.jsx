import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import { selectCartItemsInSlice, selectTotalPrice } from "../../store/cart/cart.selector";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles'


const Checkout = () => { 
    const cartItems = useSelector(selectCartItemsInSlice)
    const totalPrice = useSelector(selectTotalPrice)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>
            
            {cartItems.map((cartItem) => { 
               
                return (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    
                )
    
    
    })}
            <Total>Total: ${ totalPrice }</Total>
       
        </CheckoutContainer>
    )
}
export default Checkout