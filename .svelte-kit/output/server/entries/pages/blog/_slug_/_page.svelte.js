import { h as head, e as ensure_array_like } from "../../../../chunks/index2.js";
import { r as resolve } from "../../../../chunks/server2.js";
import { e as escape_html, a as attr } from "../../../../chunks/attributes.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    function formatDate(date) {
      return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    }
    head("1teoznn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.meta.title)} - Farhan Aulianda</title>`);
      });
      $$renderer3.push(`<meta property="og:type" content="article"/> <meta property="og:title"${attr("content", data.meta.title)}/>`);
    });
    $$renderer2.push(`<article class="relative pt-16 pb-32 px-6 w-full min-h-screen bg-zinc-950"><div class="max-w-4xl mx-auto relative z-10"><header class="mb-16 text-center"><div class="flex flex-col items-center gap-4 mb-6"><span class="text-xs font-mono text-zinc-500 uppercase tracking-widest">${escape_html(formatDate(data.meta.date))}</span> `);
    if (data.meta.tags) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex flex-wrap justify-center gap-2"><!--[-->`);
      const each_array = ensure_array_like(data.meta.tags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$renderer2.push(`<span class="text-[10px] px-2 py-1 rounded-full border border-zinc-800 text-zinc-500 uppercase tracking-wider">${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <h1 class="text-4xl md:text-6xl font-black text-white leading-tight mb-8 font-outfit">${escape_html(data.meta.title)}</h1> <p class="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">${escape_html(data.meta.description)}</p></header> <div class="blog-content prose prose-invert prose-zinc max-w-none prose-lg prose-headings:font-outfit prose-headings:font-bold prose-p:font-light prose-p:leading-loose prose-p:text-zinc-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-strong:text-white prose-strong:font-semibold prose-code:text-emerald-400 prose-code:font-mono prose-code:text-sm prose-ul:text-zinc-300 prose-ol:text-zinc-300 prose-li:text-zinc-300 prose-img:rounded-xl prose-img:border prose-img:border-zinc-800 svelte-1teoznn">`);
    if (data.content) {
      $$renderer2.push("<!--[-->");
      data.content($$renderer2, {});
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(`</div> <div class="mt-24 pt-12 border-t border-zinc-900">`);
    if (data.prevPost || data.nextPost) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">`);
      if (data.prevPost) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", resolve(`/blog/${data.prevPost.slug}`))} class="group flex flex-col p-6 border border-zinc-900 bg-zinc-900/30 hover:border-zinc-700 transition-all duration-300 rounded-xl"><span class="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">← Previous</span> <h3 class="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors font-outfit line-clamp-2">${escape_html(data.prevPost.meta.title)}</h3></a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div></div>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (data.nextPost) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", resolve(`/blog/${data.nextPost.slug}`))} class="group flex flex-col p-6 border border-zinc-900 bg-zinc-900/30 hover:border-zinc-700 transition-all duration-300 rounded-xl text-right"><span class="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Next →</span> <h3 class="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors font-outfit line-clamp-2">${escape_html(data.nextPost.meta.title)}</h3></a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="text-center"><a${attr("href", resolve("/?open=blog"))} class="inline-flex items-center text-sm font-bold text-white uppercase tracking-widest hover:text-zinc-400 transition-colors"><span class="mr-2">←</span> Back to Blog</a></div></div></div></article>`);
  });
}
export {
  _page as default
};
