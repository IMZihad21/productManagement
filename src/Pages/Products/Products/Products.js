import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        const serverAPI = "http://localhost:5000/products";
        axios.get(serverAPI)
            .then(response => setProducts(response.data));
    }, [])

    const handleDeleteBtn = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const serverAPI = `http://localhost:5000/product/${id}`;
            axios.delete(serverAPI)
                .then(({ data }) => {
                    if (data?.deletedCount === 1) {
                        const updatedproducts = products.filter(data => data._id !== id)
                        setProducts(updatedproducts);
                        alert("Deleted from database!");
                    }
                    else {
                        alert("Failed to delete!");
                    }
                });
        }
    }

    return (
        <div>
            <h1>Total Products: {products.length}</h1>
            <ul>
                {
                    products.map(data => <li
                        key={data._id}
                    >
                        <span>Name: </span>{data.productName} ::
                        <span>Price: </span>{data.productPrice} ::
                        <span>Quanity: </span>{data.productQuantity} ::
                        <br />
                        <Link to={`/product/${data._id}`}><button>Update</button></Link>
                        <button onClick={() => handleDeleteBtn(data._id)}>Delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Products;