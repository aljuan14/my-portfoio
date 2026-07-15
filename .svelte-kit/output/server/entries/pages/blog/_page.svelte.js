import { c as attr_class, h as head, e as ensure_array_like } from "../../../chunks/index2.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { c as clsx$1, e as escape_html, a as attr } from "../../../chunks/attributes.js";
import { r as resolve } from "../../../chunks/server2.js";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function SectionHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { title, subtitle, class: className = "" } = $$props;
    $$renderer2.push(`<div${attr_class(clsx$1(cn("flex flex-col gap-2 mb-12", className)))}><span class="text-sm font-medium tracking-widest text-zinc-500 uppercase">${escape_html(subtitle)}</span> <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-white">${escape_html(title)}</h2> <div class="h-1 w-20 bg-gradient-to-r from-zinc-500 to-transparent mt-4 rounded-full"></div></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    function formatDate(date) {
      return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    }
    head("u4k2t", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Blog - Farhan Aulianda</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Thoughts on software engineering, cloud architecture, and cybersecurity."/>`);
    });
    $$renderer2.push(`<section class="relative py-32 px-6 w-full min-h-screen bg-zinc-950"><div class="max-w-7xl mx-auto relative z-10"><div class="mb-24">`);
    SectionHeader($$renderer2, { title: "Writing", subtitle: "BLOG" });
    $$renderer2.push(`<!----> <p class="text-zinc-400 max-w-2xl mt-8 text-lg md:text-xl font-light leading-relaxed">Insights, tutorials, and thoughts on building scalable systems and secure infrastructure.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
    const each_array = ensure_array_like(data.posts);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let post = each_array[$$index_1];
      $$renderer2.push(`<div class="group relative flex flex-col justify-between h-full p-8 border border-zinc-900 bg-zinc-900/30 hover:border-zinc-700 transition-colors duration-500 rounded-2xl backdrop-blur-sm"><div><div class="flex flex-col gap-3 mb-6"><span class="text-xs font-mono text-zinc-500 uppercase tracking-widest">${escape_html(formatDate(post.meta.date))}</span> <div class="flex flex-wrap gap-2">`);
      if (post.meta.tags) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<!--[-->`);
        const each_array_1 = ensure_array_like(post.meta.tags);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let tag = each_array_1[$$index];
          $$renderer2.push(`<span class="text-[10px] px-2 py-1 rounded-full border border-zinc-800 text-zinc-500 uppercase tracking-wider">${escape_html(tag)}</span>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div> <h2 class="text-2xl font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors font-outfit"><a${attr("href", resolve(`/blog/${post.slug}`))} class="before:absolute before:inset-0">${escape_html(post.meta.title)}</a></h2> <p class="text-zinc-400 mb-8 line-clamp-3 font-light leading-relaxed">${escape_html(post.meta.description)}</p></div> <div class="flex items-center text-sm font-bold text-white uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">Read Article <span class="ml-2">→</span></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
export {
  _page as default
};
