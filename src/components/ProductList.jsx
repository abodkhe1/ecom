// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; 
import './ProductList.css'; // Import the CSS file

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <Link to={`/product/${product.id}`} className="product-link">
                        <img src={product.images[0]} alt={product.title} className="product-image" />
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-price">${product.price}</p>
                    </Link>
                    <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;