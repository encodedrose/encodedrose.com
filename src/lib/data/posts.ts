interface BlogPost {
    title: string;    // The title of a blog post
    metaDescription: string; // The meta description for the blog post. This is used by some search engines in the search results to let the visitor know what the page is about.
    tags: string[];   // The tags for the blog post. These are useful for users navigating your blog, and they may also be used by search engines to figure out what the blog post is about.
    createdOn: Date;  // The date that the blog post was created on.
    updatedOn?: Date; // The date that the blog post was last updated on. Optional.
    author: string;   // The author of the blog post.
}

export const blogPosts: {[key: string]: BlogPost} = {
    "on-building-celestial": {
        title: "Building Celestial",
        slug: "on-building-celestial",
        metaDescription: "A joy of building high-sizzle and juicy software.",
        tags: ["celestial"],
        createdOn: new Date('2023-12-23'),
        author: "Elizabeth Flowers",
    },
};