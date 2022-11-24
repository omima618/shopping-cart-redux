import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData } from './Store/cartActions';
import { getCartData } from './Store/cartActions';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
let isInitial = true;
function App() {
    const dispatch = useDispatch();
    const notification = useSelector(
        (state) => state.notification.notification
    );
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartChanged = useSelector((state) => state.cart.cartChanged);
    // GET CURRENT DATA
    useEffect(() => {
        dispatch(getCartData());
    }, []);
    // SEND CART DATA
    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        cartChanged && dispatch(sendCartData(cartItems));
    }, [cartItems]);
    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                <Cart />
                <Products />
            </Layout>
        </>
    );
}

export default App;
