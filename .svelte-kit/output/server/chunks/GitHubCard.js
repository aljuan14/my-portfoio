import { a as attr } from "./attributes.js";
function GitHubCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { repo = "svviitzerland/LLMAO" } = $$props;
    $$renderer2.push(`<a${attr("href", `https://github.com/${repo}`)} target="_blank" rel="noopener noreferrer" class="github-card svelte-kqnvzr">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="loading svelte-kqnvzr"><div class="shimmer svelte-kqnvzr"></div> <div class="shimmer-text svelte-kqnvzr"></div> <div class="shimmer-stats svelte-kqnvzr"></div></div>`);
    }
    $$renderer2.push(`<!--]--></a>`);
  });
}
export {
  GitHubCard as G
};
