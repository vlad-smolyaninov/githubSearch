import React from 'react';
import './SearchResults.scoped.scss';
import mockItems from './mockItems';

function SearchResults() {
    const items = mockItems
    console.log(items);
    return (
        <section className="search-results">
            {items.map((item) => (<article className="repo">
                <h3><a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.full_name}</a></h3>
                <div>{item.description}</div>
            </article>))}
        </section>
    );
}

export default SearchResults;
