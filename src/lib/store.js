import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const backgroundUrls = writable(['']);
export const backgroundUrl = writable('');
export const joke = writable('');
