import * as server from '../entries/pages/blog/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.js";
export const imports = ["_app/immutable/nodes/3.K2Pwfw8P.js","_app/immutable/chunks/Cs2d4Cc4.js","_app/immutable/chunks/Dj-u7iZK.js","_app/immutable/chunks/X7nYlg_2.js","_app/immutable/chunks/B2lRCPez.js","_app/immutable/chunks/DNrOI5Ly.js","_app/immutable/chunks/zA0CB6Wd.js","_app/immutable/chunks/B1K-Qevl.js","_app/immutable/chunks/DI5hNEVN.js","_app/immutable/chunks/DaQBbwdu.js"];
export const stylesheets = [];
export const fonts = [];
