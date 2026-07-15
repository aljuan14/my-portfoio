import { a as attr_style, s as stringify, b as store_get, c as attr_class, u as unsubscribe_stores, d as attributes, e as ensure_array_like } from "../../chunks/index2.js";
import { r as resolve } from "../../chunks/server2.js";
import { s as spring } from "../../chunks/spring.js";
import "clsx";
import { a as attr } from "../../chunks/attributes.js";
function ParallaxText($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children, speed = 1, class: className = "" } = $$props;
    let y = spring(0, { stiffness: 0.1, damping: 0.3 });
    $$renderer2.push(`<div${attr_style(`transform: translateY(${stringify(store_get($$store_subs ??= {}, "$y", y))}px)`)}${attr_class(`will-change-transform ${stringify(className)}`)}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function MagneticButton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children, class: className = "", $$slots, $$events, ...rest } = $$props;
    const x = spring(0, { stiffness: 0.1, damping: 0.25 });
    const y = spring(0, { stiffness: 0.1, damping: 0.25 });
    $$renderer2.push(`<div${attributes({
      style: `transform: translate(${stringify(store_get($$store_subs ??= {}, "$x", x))}px, ${stringify(store_get($$store_subs ??= {}, "$y", y))}px)`,
      class: `relative inline-flex items-center justify-center transition-transform will-change-transform ${stringify(className)}`,
      ...rest
    })}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let mouseX = 0;
    let mouseY = 0;
    let glitchActive = false;
    $$renderer2.push(`<main class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center relative overflow-hidden px-6 py-20 svelte-1j96wlh"><div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none svelte-1j96wlh"${attr_style(`transform: translate(${stringify(mouseX)}px, ${stringify(mouseY)}px)`)}></div> <div class="absolute inset-0 opacity-[0.02] pointer-events-none svelte-1j96wlh" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div> <div class="relative z-10 max-w-4xl mx-auto text-center svelte-1j96wlh">`);
    ParallaxText($$renderer2, {
      speed: 0.5,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="relative mb-12 svelte-1j96wlh"><h1${attr_class("text-[clamp(8rem,25vw,20rem)] font-black leading-none tracking-tighter select-none relative svelte-1j96wlh", void 0, { "glitch": glitchActive })}><span class="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 opacity-30 blur-sm svelte-1j96wlh">404</span> <span class="relative text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] svelte-1j96wlh">404</span></h1> <div class="scan-line svelte-1j96wlh"></div></div>`);
      }
    });
    $$renderer2.push(`<!----> `);
    ParallaxText($$renderer2, {
      speed: 0.4,
      children: ($$renderer3) => {
        $$renderer3.push(`<h2 class="text-2xl md:text-4xl font-light text-zinc-300 mb-6 tracking-wide svelte-1j96wlh"><span class="font-mono text-emerald-400 svelte-1j96wlh">></span> Page Not Found</h2>`);
      }
    });
    $$renderer2.push(`<!----> `);
    ParallaxText($$renderer2, {
      speed: 0.3,
      children: ($$renderer3) => {
        $$renderer3.push(`<p class="text-base md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed mb-12 font-mono svelte-1j96wlh">// The page you're looking for doesn't exist.<br class="svelte-1j96wlh"/> <span class="text-zinc-600 svelte-1j96wlh">// Let's navigate you back home.</span></p>`);
      }
    });
    $$renderer2.push(`<!----> `);
    ParallaxText($$renderer2, {
      speed: 0.2,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex flex-col sm:flex-row items-center justify-center gap-4 svelte-1j96wlh">`);
        MagneticButton($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<a${attr("href", resolve("/"))} class="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-zinc-950 font-mono text-sm uppercase tracking-[0.2em] font-semibold hover:scale-105 transition-all overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] svelte-1j96wlh"><span class="relative z-10 svelte-1j96wlh">Return Home</span> <svg class="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform svelte-1j96wlh" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" class="svelte-1j96wlh"></path></svg></a>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <button class="group relative inline-flex items-center gap-3 px-10 py-5 bg-transparent font-mono text-sm uppercase tracking-[0.2em] font-medium hover:scale-105 transition-all overflow-hidden border border-zinc-800 hover:border-zinc-600 svelte-1j96wlh"><svg class="relative z-10 w-4 h-4 text-zinc-600 group-hover:text-white group-hover:-translate-x-1 transition-all svelte-1j96wlh" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" class="svelte-1j96wlh"></path></svg> <span class="relative z-10 text-zinc-400 group-hover:text-white transition-colors svelte-1j96wlh">Go Back</span></button></div>`);
      }
    });
    $$renderer2.push(`<!----></div> <div class="absolute inset-0 pointer-events-none overflow-hidden svelte-1j96wlh"><!--[-->`);
    const each_array = ensure_array_like(Array(20));
    for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
      each_array[idx];
      $$renderer2.push(`<div class="absolute w-1 h-1 bg-zinc-700 rounded-full opacity-20 svelte-1j96wlh"${attr_style(` left: ${stringify(Math.random() * 100)}%; top: ${stringify(Math.random() * 100)}%; animation: float ${stringify(5 + Math.random() * 10)}s ease-in-out infinite; animation-delay: ${stringify(Math.random() * 5)}s; `)}></div>`);
    }
    $$renderer2.push(`<!--]--></div></main>`);
  });
}
export {
  _error as default
};
