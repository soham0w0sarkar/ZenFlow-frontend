import { i as isAuthenticated, a as backgrounds, b as backgroundUrl, j as joke } from "../../chunks/store.js";
const Fetch = async (url, method, fetch) => {
  try {
    const response = await fetch(url, {
      method,
      credentials: "include"
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
async function load({ fetch }) {
  const status = await Fetch(`/api/auth/status`, "GET", fetch);
  const background = await Fetch(`/api/background/getBackground`, "GET", fetch);
  const Joke = await Fetch(`/api/widgets/jokes`, "GET", fetch);
  if (status.success)
    isAuthenticated.set(status.success);
  if (background.success) {
    backgrounds.set(background?.backgrounds);
    backgroundUrl.set(background?.currentBackground);
  }
  if (Joke.success)
    joke.set(Joke.joke);
}
export {
  load
};
