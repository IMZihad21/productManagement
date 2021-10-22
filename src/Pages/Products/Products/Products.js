import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        const serverAPI = "http://localhost:5000/products";
        axios.get(serverAPI)
            .then(response => setProducts(response.data));
    }, [])

    return (
        <div>
            <h1>Total Products: {products.length}</h1>
            <ul>
                {
                    products.map(data=><li
                        key={data._id}
                    >{data.productName} {data.productPrice} {data.productQuantity}</li>)
                }
            </ul>
        </div>
    );
};

export default Products;