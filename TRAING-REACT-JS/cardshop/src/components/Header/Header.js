import React from 'react';
import './Header.css'
import SearchBar from '../SearchBar/SearchBar';
import Cart from '../Cart/Cart';


function Header (){
    return(
        <header className="header">
        <div className="container">
            <SearchBar />
            <Cart />
        </div>
       
        </header>
    );
    
}

export default Header;