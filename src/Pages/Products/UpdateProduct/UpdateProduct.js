import React from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { productID } = useParams();
    const handleFormSubmit = e => {
        e.preventDefault();
        
    };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="" id="" />
                <input type="email" name="" id="" />
                <input type="password" name="" id="" />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UpdateProduct;