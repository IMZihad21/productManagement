import axios from 'axios';
import React, { useState } from 'react';

const AddProuct = () => {
    const [ error, setError ] = useState(false)
    const handleFormSubmit = e => {
        e.preventDefault();
        setError(false);

        const productName = e.target.elements.productName?.value;
        const productPrice = e.target.elements.productPrice?.value;
        const productQuantity = e.target.elements.productQuantity?.value;

        if (productName === '' || productPrice === '' || productQuantity === '') {
            setError(true);
            return
        }

        const product = {
            productName,
            productPrice: parseInt(productPrice),
            productQuantity: parseInt(productQuantity)
        }

        const serverAPI = "http://localhost:5000/product";
        axios.post(serverAPI, product)
            .then((response) => {
                if (response.data?.acknowledged) {
                    alert('Product added to database')
                    e.target.reset();
                }
                else {
                    alert('Failed to add to database')
                }
            });

    };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="productName">Enter your product's Name:  </label>
                    <input type="text" name="" id="productName" />
                </div>
                <div>
                    <label htmlFor="productPrice">Enter your product's Price:  </label>
                    <input type="number" name="" id="productPrice" />
                </div>
                <div>
                    <label htmlFor="productQuantity">Enter your product's Quantity:  </label>
                    <input type="number" name="" id="productQuantity" />
                </div>
                <button>Submit</button>
            </form>
            {
                error && <h1>All inputs required!</h1>
            }
        </div>
    );
};

export default AddProuct;