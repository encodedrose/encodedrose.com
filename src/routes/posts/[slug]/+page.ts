import { blogPosts } from "$lib/data/posts";

export const prerender = false;

// @ts-ignore
export async function load({ params }) {
  const slug = params.slug;
  const blogPost = blogPosts[slug];
  if (!blogPost) {
    throw new Error(`No blog post found for slug ${slug}`);
  }

  const mdPost = await import(`../${slug}.md`);
  const Content = mdPost.default;

  if (!mdPost) {
    throw new Error(`No blog post found for slug ${slug}`);
  }

  return {blogPost, Content};
}