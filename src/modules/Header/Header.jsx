import React from 'react';
import './Header.scoped.scss';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';

function Header() {
    return (
        <header className="header">
            <SearchBar />
            <Button><span role="img" aria-label="Search">🔎</span></Button>
        </header>
    );
}

export default Header;
