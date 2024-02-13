import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const backgrounds = writable([{}]);
export const backgroundUrl = writable('https://res.cloudinary.com/dwcquwmpw/image/upload/v1707084584/wallpaperflare.com_wallpaper_1_nrbh4c.jpg');
export const joke = writable('');
export const currentCard = writable(-1);
export const weather = writable({});
