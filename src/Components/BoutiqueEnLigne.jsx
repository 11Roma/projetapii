
import axios from 'axios';
import React, { useState, useEffect } from 'react';
const BoutiqueEnLigne = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Prix: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BoutiqueEnLigne;

