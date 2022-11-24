import { notificationActions } from './notification';
import { cartActions } from './cart';

export const sendCartData = (cartItems) => {
    return async (dispatch) => {
        try {
            dispatch(
                notificationActions.setNotifiaction({
                    status: 'pending',
                    title: 'Sending...',
                    message: 'Sending cart data!',
                })
            );
            const response = await fetch(
                'https://shopping-cart-eb746-default-rtdb.firebaseio.com/cart.json',
                { method: 'PUT', body: JSON.stringify(cartItems) }
            );
            if (!response.ok) throw new Error('Something went wrong!');
            dispatch(
                notificationActions.setNotifiaction({
                    status: 'success',
                    title: 'Success!',
                    message: 'Cart data sent successfully!',
                })
            );
        } catch (error) {
            dispatch(
                notificationActions.setNotifiaction({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data faild!',
                })
            );
        }
    };
};

export const getCartData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                'https://shopping-cart-eb746-default-rtdb.firebaseio.com/cart.json'
            );
            if (!response.ok) throw new Error('Could not fetch data!');
            const data = await response.json();
            dispatch(cartActions.replaceCart(data));
        } catch (error) {
            dispatch(
                notificationActions.setNotifiaction({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data faild!',
                })
            );
        }
    };
};
