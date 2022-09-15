import React, { useEffect, useState } from 'react';

const Product = (props) => {

    const [product, setProduct] = useState({id: 0, image: '', name: '', price: 0.00, description: ''});

    
    useEffect( ()=> {
        // call find product by id (props.id)
        const apiResult = {id: 2, image: 'ocp.jpg', name: 'OCP', price: 60.00, description: 'Oracle Certified Assosiation STUDY GUYDE!'};
        setProduct(apiResult);
    } , []);

    return (
        <div className='card' style={{width: '250px'}}>
            <div className='card-header'>
                <img className='card-img-top' src={`/img/${product.image}`}/>
            </div>
            <div className='card-body'>
                <h4 className='card-title'> {product.name}</h4>
                <p className='card-text'>{product.description}</p>
                <h2>{product.price} $</h2>
            </div>
            <div className='card-footer'>
                <button className='btn btn-primary'>Buy</button>
            </div>
        </div>
    );
};

export default Product;