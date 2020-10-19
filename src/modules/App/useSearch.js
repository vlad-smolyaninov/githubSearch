import { useState } from 'react';
import { getRepoList } from '../../lib/api';
import { getHistory, setHistory } from '../../lib/cache';

let controller = new AbortController();

const useSearch = () => {
    const [data, setData] = useState([]);
    const [curPage, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);


    const onSearch = async (searchField = '', page = 1) => {
        setPage(page);

        // check cache
        const history = getHistory();
        if (history[searchField] && history[searchField][page]) {
            setData(history[searchField][page])
            return;
        }

        try {
            setLoading(true);
            setData({ list: [] });
            const data = await getRepoList({
                params: {
                    sort: 'stars',
                    order: 'desc',
                    page: page,
                    q: encodeURI(searchField)
                },
                signal: controller.signal
            })

            setHistory({ ...history, [searchField]: { ...history[searchField], [page]: data } })

            setLoading(false);
            setData(data);
        } catch (e) {
            console.log('request aborted')
        }
    }

    const onStop = () => {
        controller.abort()
        controller = new AbortController();
        setLoading(false);
    }

    return {
        onSearch, onStop, data, page: curPage, isLoading, setLoading
    }
}

export default useSearch;
