'use client';
import { useState, useEffect } from "react";

export function useLocalStorage<T>(item: string) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window !== "undefined") {
            const storedValue = localStorage.getItem(item);
            return storedValue ? JSON.parse(storedValue) : [];
        }
        return [] as T;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedValue = localStorage.getItem(item);
            setValue(storedValue ? JSON.parse(storedValue) : []);
        }
    }, [item]);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        if (typeof window !== "undefined") {
            localStorage.setItem(item, JSON.stringify(newValue));
        }
    };

    return { value, updateLocalStorage };
}
