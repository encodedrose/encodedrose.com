interface BlogPost {
    title: string;    // The title of a blog post
    metaDescription: string; // The meta description for the blog post. This is used by some search engines in the search results to let the visitor know what the page is about.
    tags: string[];   // The tags for the blog post. These are useful for users navigating your blog, and they may also be used by search engines to figure out what the blog post is about.
    createdOn: Date;  // The date that the blog post was created on.
    updatedOn?: Date; // The date that the blog post was last updated on. Optional.
    author: string;   // The author of the blog post.
}

export const blogPosts: {[key: string]: BlogPost} = {
    "my-first-blog-post": {
        title: "My First Blog Post",
        slug: "my-first-blog-post",
        metaDescription: "This is my personal journey on how I started programming. In it, I share the challenges I faced and how I overcame them.",
        tags: ["Journey", "Programming", "Motivational"],
        createdOn: new Date('2023-09-18'),
        author: "John Doe",
    },
};