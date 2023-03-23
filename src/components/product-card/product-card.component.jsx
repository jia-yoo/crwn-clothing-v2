import { useDispatch, useSelector } from 'react-redux';


import Button, { BUTTON_TYPE_CLASSES} from '../button/button.component'

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx'

import { selectCartItemsInSlice } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItemsInSlice)
    const { name, price, imageUrl } = product;

    const addProductOnClick = () => { return dispatch(addItemToCart(cartItems, product)) }
    return (
        <ProductCardContainer>
        <img src={imageUrl} alt={ `${name}`} />
        <Footer>
            <Name>{ name }</Name>
            <Price>{ price }</Price>
        </Footer>
            <Button buttonType={ BUTTON_TYPE_CLASSES.inverted } onClick={addProductOnClick}>Add to cart</Button>
    </ProductCardContainer>

    )
  

}
export default ProductCard