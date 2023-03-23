// import { createContext, useReducer } from 'react'
// import { createAction } from '../utils/reducer/reducer.utils'

// const addCartItem = (cartItems, productToAdd) => {

//     // check if the cartItem mathches productToAdd
//     const existingItemInCart = cartItems.find((cartItem) => cartItem.id===productToAdd.id)

//     // if does, increment the quantity
//     if (existingItemInCart) {
        
//         return cartItems.map((cartItem) =>
//             cartItem.id === existingItemInCart.id ? { ...cartItem, quantity: existingItemInCart.quantity + 1 } : cartItem
//         )
//     }

//     // if not, return the cartItem/modified cartItem
//     return [...cartItems, {...productToAdd, quantity:1}]

// }

// const removeCartItem = (cartItems, productToRemove) => { 
// //check if the cartItem matches productToremove
// const existingItemInCart = cartItems.find((cartItem) => cartItem.id===productToRemove.id)
    
// //if does, check if the quantity is equal to 1, if it is remove that item from the cart
//     if (existingItemInCart.quantity === 1) { 
//        return cartItems.filter((cartItem)=> cartItem.id !== existingItemInCart.id)
//     }
    
// // return back cartItems with matching cart item with reduced quantity
//     return  cartItems.map((cartItem) =>
//         cartItem.id === existingItemInCart.id ? { ...cartItem, quantity: existingItemInCart.quantity - 1 } : cartItem
//     )
// }

// const clearCartItem = (cartItems, cartItemToClear) =>   cartItems.filter((cartItem)=> cartItem.id !== cartItemToClear.id)
 


// export const CartContext = createContext({
//     isCartOpen: false,
//     setIsCartOpen: () => { },
//     cartItems: [],
//     addItemToCart: () => { },
//     removeItemFromCart: () => { },
//     clearItemFromCart: () => { },
//     totalQuantity: 0,
//     totalPrice:0,
    
// })

// const CART_ACTION_TYPES = {
//     SET_NEW_CART_ITEMS: 'SET_NEW_CART_ITEMS',
//     SET_IS_CART_OPEN:'SET_IS_CART_OPEN'

// }

// const cartReducer = (state, action) => { 
//     const { type, payload } = action;

//     switch (type) { 
//         case CART_ACTION_TYPES.SET_NEW_CART_ITEMS:
//             return {
//                 ...state,
//                 ...payload
//             }
//         case CART_ACTION_TYPES.SET_IS_CART_OPEN: { 
//             return {
//                 ...state,
//                 isCartOpen:payload,
//             }
//         }
//         default:
//             throw new Error(`Unhandled type ${type} in cartReducer`)
//     }
// }

// const INITIAL_STATE = {
//     isCartOpen: false,
//     cartItems: [],
//     totalQuantity: 0,
//     totalPrice:0,
// }


// export const CartProvider = ({ children }) => { 

//     const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
//     const { isCartOpen, cartItems, totalQuantity, totalPrice } = state;


//     const setNewCartItems = (newCartItems) => {
//         const newTotalQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
//         const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price*cartItem.quantity, 0)

//         dispatch(createAction('SET_NEW_CART_ITEMS', { cartItems: newCartItems, totalQuantity: newTotalQuantity, totalPrice: newTotalPrice }))
//     };


//     const addItemToCart = (productToAdd) => { 
//         setNewCartItems(addCartItem(cartItems, productToAdd))
//     }
//     const removeItemFromCart = (productToRemove) => { 
//         setNewCartItems(removeCartItem(cartItems, productToRemove))
//     }

//     const clearItemFromCart = (cartItemToClear) => { 
//         setNewCartItems(clearCartItem(cartItems, cartItemToClear))
//     }

//     const setIsCartOpen = (bool) => {
//         dispatch(createAction('SET_IS_CART_OPEN', bool ))
//     }
 
//     const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, totalQuantity,totalPrice}

//     return (

//         <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
//     )
// }