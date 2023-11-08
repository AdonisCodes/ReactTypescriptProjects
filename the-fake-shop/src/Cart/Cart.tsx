import {CartItem} from "../CartItem/CartItem.tsx";

// Styles
import {Wrapper} from "./Cart.styles";

// Types
import {CartItemType} from "../App";

type Props = {
    cartItems: CartItemType[]
    addToCart: (clickedItem: CartItemType) => void
    removeFromCart: (id: number) => void
}

export const Cart = ({cartItems, addToCart, removeFromCart}: Props) => {

    return (
        <Wrapper>
            <h2>Your shopping cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}/>

            ))}
        </Wrapper>
    )
}