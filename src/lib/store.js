import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const backgrounds = writable([{}]);
export const backgroundUrl = writable('');
export const joke = writable('');
