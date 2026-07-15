import { g as getContext, a as attr_style, s as stringify, b as store_get, c as attr_class, u as unsubscribe_stores } from "../../chunks/index2.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/routing.js";
import "../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/exports.js";
import { n as noop, a as attr } from "../../chunks/attributes.js";
import { s as spring } from "../../chunks/spring.js";
import { r as resolve } from "../../chunks/server2.js";
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
const placeholder_url = "a:";
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL(placeholder_url)
  });
}
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children } = $$props;
    let showIntro = false;
    let coords = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.25 });
    let size = spring(10, { stiffness: 0.1, damping: 0.25 });
    $$renderer2.push(`<div class="hidden md:block fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"${attr_style(`transform: translate(${stringify(store_get($$store_subs ??= {}, "$coords", coords).x)}px, ${stringify(store_get($$store_subs ??= {}, "$coords", coords).y)}px)`)}><div${attr_style(`width: ${stringify(store_get($$store_subs ??= {}, "$size", size))}px; height: ${stringify(store_get($$store_subs ??= {}, "$size", size))}px;`)} class="bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div${attr_class("font-sans antialiased text-zinc-50 selection:bg-zinc-300 selection:text-zinc-900 bg-zinc-950 min-h-screen flex flex-col items-center overflow-x-hidden selection:bg-white/20 transition-opacity duration-500", void 0, { "opacity-0": showIntro })}>`);
    if (store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/blog/")) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<nav class="fixed top-2 left-2 right-2 z-50 h-7 bg-zinc-800/70 backdrop-blur-2xl border border-white/10 rounded-xl flex items-center justify-between px-4 select-none shadow-lg"><a${attr("href", resolve("/"))} class="text-[12px] font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg> Desktop</a> <span class="text-[12px] text-zinc-500">Farhan Aulianda</span> <a${attr("href", resolve("/?open=blog"))} class="text-[12px] font-medium text-zinc-400 hover:text-white transition-colors">All Posts</a></nav>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
