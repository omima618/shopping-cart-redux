import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../Store/cart';
const CartButton = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const toggleCartHandler = () => {
        dispatch(cartActions.toggleCart());
    };
    return (
        <button onClick={toggleCartHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartItems.length}</span>
        </button>
    );
};

export default CartButton;
