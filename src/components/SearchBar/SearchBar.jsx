import React from 'react';
import './SearchBar.scoped.scss';

function SearchBar(props) {
    return (
        <div className="search-bar">
            <input className="input" {...props}/>
        </div>
    );
}

export default SearchBar;
