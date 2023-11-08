import Button from "@material-ui/core/Button";

// Types
import { CartItemType } from "../App";

// Styles
import { Wrapper } from "./CartItem.styles";

type Props = {
    item: CartItemType
    addToCart: (clickedItem: CartItemType) => void
    removeFromCart: (id: number) => void
}

export const CartItem = (props: Props) => {
    return (
        <Wrapper>
            <div>
                <h3>
                    {props.item.title}
                </h3>
                <div className="information">
                    <p>Price: ${props.item.price}</p>
                    <p>Total: ${(props.item.amount * props.item.price).toFixed(2)}</p>
                </div>
                <div className={'buttons'}>
                    <Button
                        size={'small'}
                        disableElevation
                        variant={'contained'}
                        onClick={() => props.removeFromCart(props.item.id)}
                    >-</Button>
                    <p>{props.item.amount}</p>
                    <Button
                        size={'small'}
                        disableElevation
                        variant={'contained'}
                        onClick={() => props.addToCart(props.item)}
                    >+</Button>
                </div>
            </div>
            <img src={props.item.image} alt={props.item.title}/>
        </Wrapper>
    );
}
