const historyKey = 'history'

export const getHistory = () => {
    try {
        const json = localStorage.getItem(historyKey);
        return JSON.parse(json) || {};
    } catch (e) {
        return {}
    }
}

export const setHistory = (history = {}) => {
    return localStorage.setItem(historyKey, JSON.stringify(history)) || {};
}
