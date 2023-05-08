export interface Author {
    name: string;
    title: string;
    profileUrl: string;
    avatarUrl: string;
}

export interface Post {
    id: string;
    title: string;
    slug: string;
    publishedAt: string;
    tags: string[];
    categories: string[];
    brief: string;
    coverImage: string;
    author?: Author;
    mdContent?: string;
    htmlContent?: string;
}
