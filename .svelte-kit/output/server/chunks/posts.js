const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/lib/content/posts/aws-summit-jakarta-2025.md": () => import("./aws-summit-jakarta-2025.js"), "/src/lib/content/posts/building-llmao.md": () => import("./building-llmao.js"), "/src/lib/content/posts/deploying-openclaw-aws.md": () => import("./deploying-openclaw-aws.js"), "/src/lib/content/posts/terraform-opentofu-fork.md": () => import("./terraform-opentofu-fork.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      try {
        const { metadata } = await resolver();
        const postPath = path.slice(11, -3);
        const slug = path.split("/").pop().slice(0, -3);
        return {
          meta: metadata,
          path: postPath,
          slug
        };
      } catch (error) {
        console.error("Error loading post:", path, error);
        return null;
      }
    })
  );
  const validPosts = allPosts.filter((post) => post && post.meta && post.meta.date);
  return validPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
};
export {
  fetchMarkdownPosts as f
};
