import React from 'react';
import './Header.scoped.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import Button from '../../components/Button/Button';
import useSearchBar from './useSearchBar';

const perPage = 30;

function Header({ onSearch, onStop, page, isLoading, total = 0 }) {
    const { input, onInput, onSubmit } = useSearchBar({ isLoading, onStop, onSearch })

    return (
        <header className="header">
            <SearchBar value={input} onChange={(e) => onInput(e.target.value)} />
            <Button onClick={onSubmit}><span role="img" aria-label="Search">{isLoading ? '❌' : '🔎'}</span></Button>
            <div className="left">
                {page > 1 &&
                <Button onClick={() => onSearch(input, page - 1)}><span role="img" aria-label="Prev">👈</span></Button>}
                <div className="page">{page}</div>
                {total > page * perPage &&
                <Button onClick={() => onSearch(input, page + 1)}><span role="img" aria-label="Next">👉</span></Button>
                }
            </div>
        </header>
    );
}

export default Header;
