import { useState, useEffect } from "react";

export function useLocalStorageState(initialState: any, key: string) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);
        storedValue
            ? console.log("storedValue", typeof storedValue)
            : console.log("storedValue NO", storedValue);
        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(
        function () {
            localStorage.setItem(key, JSON.stringify(value));
        },
        [value, key]
    );

    return [value, setValue];
}
