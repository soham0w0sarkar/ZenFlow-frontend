import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Bo79as6b.js","_app/immutable/chunks/Icon.pM8mz-m1.js","_app/immutable/chunks/index.6Dl2lb1K.js","_app/immutable/chunks/scheduler.BNBspLx6.js","_app/immutable/chunks/index.Vt5M9wIh.js","_app/immutable/chunks/stores.DXPrWGQp.js","_app/immutable/chunks/entry.CK4fRsCe.js"];
export const stylesheets = ["_app/immutable/assets/2.fp2Ffj94.css"];
export const fonts = [];
