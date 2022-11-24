import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
    const products = [
        {
            title: 'product one',
            price: 6,
            description: 'This is a first product - amazing!',
            id: '1',
        },
        {
            title: 'product two',
            price: 10,
            description: 'This is a second product - amazing!',
            id: '2',
        },
        {
            title: 'product three',
            price: 15,
            description: 'This is a third product - amazing!',
            id: '3',
        },
    ];
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map((product) => {
                    return (
                        <ProductItem
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            id={product.id}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default Products;
