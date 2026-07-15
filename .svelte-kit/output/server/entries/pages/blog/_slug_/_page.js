import { error } from "@sveltejs/kit";
import { f as fetchMarkdownPosts } from "../../../../chunks/posts.js";
const load = async ({ params }) => {
  const posts = /* @__PURE__ */ Object.assign({ "/src/lib/content/posts/aws-summit-jakarta-2025.md": () => import("../../../../chunks/aws-summit-jakarta-2025.js"), "/src/lib/content/posts/building-llmao.md": () => import("../../../../chunks/building-llmao.js"), "/src/lib/content/posts/deploying-openclaw-aws.md": () => import("../../../../chunks/deploying-openclaw-aws.js"), "/src/lib/content/posts/terraform-opentofu-fork.md": () => import("../../../../chunks/terraform-opentofu-fork.js") });
  const match = posts[`/src/lib/content/posts/${params.slug}.md`];
  if (!match) {
    throw error(404, `Could not find ${params.slug}`);
  }
  const post = await match();
  const allPosts = await fetchMarkdownPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  return {
    content: post.default,
    meta: post.metadata,
    prevPost,
    nextPost
  };
};
export {
  load
};
