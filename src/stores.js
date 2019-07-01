import { writable } from 'svelte/store';

const initActiveIndex = () => {
    const { subscribe, set, update } = writable(0)

    return {
        subscribe,
        navigateRight: () => update(n => n + 1),
        navigateLeft: () => update(n => n - 1)
    }
}

export const activeIndex = initActiveIndex()


