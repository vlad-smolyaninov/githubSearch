import { useState } from 'react';

const useSearchBar = ({ isLoading, onStop, onSearch }) => {
    const [input, onInput] = useState('');
    const onSubmit = () => {
        if (isLoading) {
            onStop();
        } else {
            onSearch(input);
        }
    };

    return { input, onInput, onSubmit }
}

export default useSearchBar;
