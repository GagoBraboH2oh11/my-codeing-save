import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs'
import './SearchBar.css'
function SearchBar() {
    const [SearchValue,SetsearchValue] = useState('');
    return(
    <form className="search-bar">
      <input 
        type="search"
        placeholder="pesquise aqui :)"
        className="search__input"
        onChange={({target})=>SetsearchValue(target.value)}
        required
        maxLength={50}
      />
        
      <button type="submit" className="search__button"><BsSearch /></button>
    </form>
  );
}

export default SearchBar;
