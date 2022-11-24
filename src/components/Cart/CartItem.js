import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../Store/cart';
const CartItem = (props) => {
    const dispatch = useDispatch();
    const cartItems = JSON.parse(
        JSON.stringify(useSelector((state) => state.cart.cartItems))
    );
    const { title, quantity, price, id } = props.item;
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    const increaseHandler = () => {
        dispatch(cartActions.increaseQuantity(id));
    };
    const decreaseHandler = () => {
        quantity === 1
            ? dispatch(cartActions.removeItem(id))
            : dispatch(cartActions.decreaseQuantity(id));
    };
    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${(price * quantity).toFixed(2)}{' '}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={decreaseHandler}>-</button>
                    <button onClick={increaseHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
