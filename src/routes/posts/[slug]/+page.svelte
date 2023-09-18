<script>
    // import { BlogPost } from '$lib/data/posts.ts';
    // export let slug: string; // assuming slug is passed as a prop
    // let data = blogPosts[slug]; // use the slug to get the correct post
    export let data;

    const { blogPost, Content } = data;
</script>

<article>
  <h1>{blogPost.title}</h1>
  <p>Published: {blogPost.author}</p>
  <Content />
</article>