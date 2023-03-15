import { createContext, useState, useEffect } from 'react'

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
 

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    totalQuantity: 0,
    totalPrice:0,
    
})

export const CartProvider = ({ children }) => { 

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => { 
        const newTotalQuantity = cartItems.reduce((total, cartItem) =>  total + cartItem.quantity , 0)
        setTotalQuantity(newTotalQuantity)
    }, [cartItems])
    
    useEffect(() => { 
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price*cartItem.quantity, 0)
        setTotalPrice(newTotalPrice)
    },[cartItems])

    const addItemToCart = (productToAdd) => { 
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (productToRemove) => { 
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => { 

        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }
 
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, totalQuantity,totalPrice}

    return (

        <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
    )
}