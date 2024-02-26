import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const backgrounds = writable([{}]);
export const backgroundUrl = writable('https://res.cloudinary.com/dwcquwmpw/image/upload/v1708938820/wallpaperflare.com_wallpaper_1_bt0cpf.webp');
export const joke = writable('');
export const currentCard = writable(-1);
export const weather = writable({});
