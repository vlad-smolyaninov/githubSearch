import React from 'react';
import './SearchResults.scoped.scss';

function SearchResults({ list = [], isLoading }) {
    return (
        <section className="search-results">
            {isLoading && <div className="placeholder">...</div>}
            {list.map((item) => (
                <article
                    key={item.id}
                    className="repo">
                    <h3><a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.full_name}</a></h3>
                    <div className="description">{item.description}</div>
                </article>
            ))}
        </section>
    );
}

export default SearchResults;
