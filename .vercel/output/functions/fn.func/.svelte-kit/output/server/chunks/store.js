import { w as writable } from "./index.js";
const isAuthenticated = writable(false);
const backgrounds = writable([{}]);
const backgroundUrl = writable("https://res.cloudinary.com/dwcquwmpw/image/upload/v1707084584/wallpaperflare.com_wallpaper_1_nrbh4c.jpg");
const joke = writable("");
const currentCard = writable(-1);
const weather = writable({});
export {
  backgrounds as a,
  backgroundUrl as b,
  currentCard as c,
  isAuthenticated as i,
  joke as j,
  weather as w
};
