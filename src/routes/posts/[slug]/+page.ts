// import { dev } from '$app/environment';
import { blogPosts } from "$lib/data/posts";
//
// // we don't need any JS on this page, though we'll load
// // it in dev so that we get hot module replacement
// export const csr = dev;
//
// // since there's no dynamic data here, we can prerender
// // it so that it gets served as a static asset in production
export const prerender = true;


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