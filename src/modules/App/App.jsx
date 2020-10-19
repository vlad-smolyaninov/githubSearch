import React  from 'react';
import Header from '../Header/Header';
import './App.scoped.scss';
import SearchResults from '../../components/SearchResults/SearchResults';
import useSearch from './useSearch';

function App() {
    const { onSearch, onStop, data, page, isLoading } = useSearch( );

    return (
        <div className="App">
            <Header isLoading={isLoading} onSearch={onSearch} onStop={onStop} page={page} total={data.total_count} />
            <SearchResults list={data.items} isLoading={isLoading} />
        </div>
    );
}

export default App;
