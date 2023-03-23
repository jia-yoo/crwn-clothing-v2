import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";


const addCartItem = (cartItems, productToAdd) => {

    // check if the cartItem mathches productToAdd
    const existingItemInCart = cartItems.find((cartItem) => cartItem.id===productToAdd.id)

    // if does, increment the quantity
    if (existingItemInCart) {
        
        return cartItems.map((cartItem) =>
            cartItem.id === existingItemInCart.id ? { ...cartItem, quantity: existingItemInCart.quantity + 1 } : cartItem
        )
    }

    // if not, return the cartItem/modified cartItem
    return [...cartItems, {...productToAdd, quantity:1}]

}

const removeCartItem = (cartItems, productToRemove) => { 
//check if the cartItem matches productToremove
const existingItemInCart = cartItems.find((cartItem) => cartItem.id===productToRemove.id)
    
//if does, check if the quantity is equal to 1, if it is remove that item from the cart
    if (existingItemInCart.quantity === 1) { 
       return cartItems.filter((cartItem)=> cartItem.id !== existingItemInCart.id)
    }
    
// return back cartItems with matching cart item with reduced quantity
    return  cartItems.map((cartItem) =>
        cartItem.id === existingItemInCart.id ? { ...cartItem, quantity: existingItemInCart.quantity - 1 } : cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) =>   cartItems.filter((cartItem)=> cartItem.id !== cartItemToClear.id)
 






export const addItemToCart = (cartItems, productToAdd) => { 
    return createAction(CART_ACTION_TYPES.SET_NEW_CART_ITEMS, addCartItem(cartItems, productToAdd))
}
export const removeItemFromCart = (cartItems, productToRemove) => { 
    return createAction(CART_ACTION_TYPES.SET_NEW_CART_ITEMS, removeCartItem(cartItems, productToRemove))
}

export const clearItemFromCart = (cartItems, cartItemToClear) => { 
    return createAction(CART_ACTION_TYPES.SET_NEW_CART_ITEMS, clearCartItem(cartItems, cartItemToClear))
    
}

export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
