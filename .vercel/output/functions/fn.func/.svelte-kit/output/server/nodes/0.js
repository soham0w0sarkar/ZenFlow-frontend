

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DWgu611C.js","_app/immutable/chunks/scheduler.BNBspLx6.js","_app/immutable/chunks/index.Vt5M9wIh.js","_app/immutable/chunks/index.6Dl2lb1K.js","_app/immutable/chunks/Icon.pM8mz-m1.js"];
export const stylesheets = ["_app/immutable/assets/0.BzcFa2zl.css"];
export const fonts = [];
