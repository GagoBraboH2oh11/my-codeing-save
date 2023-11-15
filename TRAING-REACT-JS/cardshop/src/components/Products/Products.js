import React, { useState, useEffect } from 'react';
import './Products.css'
import GetElementeML from '../../api/GetElementeML';
import ProductCart from '../ProductCart/ProductCart';

function Products() {
    
    const [products,setproducts] = useState([])

    useEffect(() =>{
        GetElementeML('iphone').then((response)=>{

            setproducts(response)
            console.log(response)
        })
    },[])


    return ( 
        <section className='products container'>
            {
                products.map((product) => <ProductCart key={product.id} data={product} />)
            }
        </section>
     );
}


export default Products;

