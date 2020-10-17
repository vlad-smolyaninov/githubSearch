import React from 'react';
import Header from '../Header/Header';
import './App.scoped.scss';
import SearchResults from '../SearchResults/SearchResults';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <SearchResults/>
        </div>
    );
}

export default App;
