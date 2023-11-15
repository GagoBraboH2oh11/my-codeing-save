import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Cart.css';
    function Cart() {
        return ( 
            <button type='button' className='Cart__button'>
            <AiOutlineShoppingCart />
            <span className='Cart__status'>1</span>
            </button>

            
         );
    }
    
    export default Cart;