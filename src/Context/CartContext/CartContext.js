import {createContext, useState, useEffect } from 'react';

export const CartContext = createContext([]);

export default function AppContextProvider({children}){
    const [cart, setCart] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

    function isInCart (id) {
        return cart.some(item => item.id === id)
    }

    function addToCart({id, category, title, price, quantity}) {
        const isCurrentInCart = isInCart(id)
        if (isCurrentInCart) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: quantity + item.quantity
                    }
                }
                return item
            })
            return setCart([...newCart])
        }
        setCart([...cart, {id, category, title, price, quantity}])
    }

    function updateToCart({id, category, title, price, quantity}) {
        const isCurrentInCart = isInCart(id)
        if (isCurrentInCart) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: quantity
                    }
                }
                return item
            })
            return setCart([...newCart])
        }
        setCart([...cart, {id, category, title, price, quantity}])
    }

    function clearCart(){
        setCart([]);
    }

    useEffect(() => {
		const Total = () => {
			let totalPrice = 0;
			let totalItems = 0;
			for (const Item of cart) {
				totalPrice = totalPrice + Item.price * Item.quantity;
				totalItems += Item.quantity;
			}
			setTotalItems(totalItems);
			setTotalPrice(totalPrice.toFixed(2));
		};
		Total();
	}, [cart]);

    function handleRemove(id) {
        const newcart = cart.filter((item) => item.id !== id);
        setCart(newcart);
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                clearCart,
                updateToCart,
                handleRemove,
                totalPrice, 
                totalItems,
            }
        }>
            {children}
        </CartContext.Provider>
    )
}