import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd) => {

    // check if the cartItem mathches productToAdd
    const existingItemInCart = cartItems.find((cartItem) => cartItem.id===productToAdd.id)

    // if does, increment the quantity
    if (existingItemInCart) {
        
        return cartItems.map((cartItem) =>
            cartItem.id === existingItemInCart.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    // if not, return the cartItem/modified cartItem
    return [...cartItems, {...productToAdd, quantity:1}]

 }

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    totalQuantity:0
    
})

export const CartProvider = ({ children }) => { 

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => { 
        const newTotalQuantity = cartItems.reduce((total, cartItem) =>  total + cartItem.quantity , 0)
        setTotalQuantity(newTotalQuantity)
    },[cartItems])

    const addItemToCart = (productToAdd) => { 
        setCartItems(addCartItem(cartItems, productToAdd))
    }
 
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, totalQuantity}

    return (

        <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
    )
}