import { renderHook, act } from '@testing-library/react-hooks';
import useSearch from './useSearch';
import { getRepoList } from '../../lib/api';
import { getHistory, setHistory } from '../../lib/cache';

jest.mock('../../lib/api', () => ({
    getRepoList: jest.fn(() => true)
}));

jest.mock('../../lib/cache', () => ({
    getHistory: jest.fn(() => ({
        test: {
            2: true
        }
    })),
    setHistory: jest.fn(() => null),
}));

describe('useSearch', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });


    test('onSearch should return cached', async () => {
        const { result } = renderHook(() => useSearch());

        await result.current.onSearch('test', 2)

        expect(result.current.page).toBe(2);
        expect(getHistory).toHaveBeenCalled();
        expect(getRepoList).not.toHaveBeenCalled();
        expect(setHistory).not.toHaveBeenCalled();
    });

    test('onSearch should check cache and do request', async () => {
        const { result } = renderHook(() => useSearch());

        await result.current.onSearch('test', 1)

        expect(result.current.page).toBe(1);
        expect(getHistory).toHaveBeenCalled();
        expect(getRepoList).toHaveBeenCalled();
        expect(setHistory).toHaveBeenCalled();
    });

    test('onStop should set isLoading false', async () => {
        const { result } = renderHook(() => useSearch());
        act(() =>  result.current.setLoading(true))
        act(() =>  result.current.onStop())
        expect(result.current.isLoading).toBe(false);
    })
});
