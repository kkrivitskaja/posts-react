import { useState, useEffect } from 'react';

//custom hook for saving selected values in localStorage
function getStorageValue(key, defaultValue) {
    if (typeof window != 'undefined') {
        const savedValue = localStorage.getItem(key);
        const initialValue = savedValue !== null ? JSON.parse(savedValue) : defaultValue;
        return initialValue;
    }
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
