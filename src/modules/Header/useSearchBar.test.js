import { renderHook, act } from '@testing-library/react-hooks';
import useSearchBar from './useSearchBar';


describe('useSearchBar', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('onSubmit should call onSearch with input', async () => {
        const onStop = jest.fn();
        const onSearch = jest.fn();
        const { result } = renderHook(() => useSearchBar({
            isLoading: false,
            onStop, onSearch
        }));

        act(() =>  result.current.onInput('foo'))
        act(() =>  result.current.onSubmit())

        expect(onSearch).toHaveBeenCalledWith('foo');
        expect(onStop).not.toHaveBeenCalled();
    });

    test('onSubmit should call onStop ', async () => {
        const onStop = jest.fn();
        const onSearch = jest.fn();
        const { result } = renderHook(() => useSearchBar({
            isLoading: true,
            onStop, onSearch
        }));

        act(() =>  result.current.onInput('foo'))
        act(() =>  result.current.onSubmit())

        expect(onStop).toHaveBeenCalled();
        expect(onSearch).not.toHaveBeenCalled();
    });
});
