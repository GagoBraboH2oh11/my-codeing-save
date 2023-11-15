import React from 'react';
import './ProductCart.css'
import { PropTypes } from 'prop-types';
import {BsFillCartPlusFill} from 'react-icons/bs'
import FormatCurrency from '../../utils/FormatCurrency'
function ProductCart({data}) {
     const{ title, thumbnail, price} = data
    return ( 
        <section className='product-cart'>
            <img src={thumbnail.replace(/\w\.jpg/gi,"W.jpg")} 
            className='cart__image' alt='produtos'></img>

            <div className='cart__info'>
                <div className='cart__price'>{FormatCurrency(price, 'BRL')}</div>
                <div className='cart__title'>{title}</div>
            </div>
            
            <button type='button' className='button_add-cart'><BsFillCartPlusFill/></button>
        </section>
     );
}

export default ProductCart;

ProductCart.prototypes = {
    data: PropTypes.shape({

    })
}.isRequired


