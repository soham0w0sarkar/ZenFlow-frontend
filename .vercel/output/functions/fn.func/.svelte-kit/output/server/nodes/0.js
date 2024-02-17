

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6OF-w2B1.js","_app/immutable/chunks/scheduler.uCYiwJ0C.js","_app/immutable/chunks/index.i2CHnZJy.js","_app/immutable/chunks/index.MJO7zkeJ.js","_app/immutable/chunks/Icon.Gf9fFoz2.js"];
export const stylesheets = ["_app/immutable/assets/0.c3BWts5c.css"];
export const fonts = [];
