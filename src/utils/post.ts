import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@/types/post';

const BLOG_FOLDER = path.join(process.cwd(), 'src/posts');

export async function getPostList(): Promise<Post[]> {
    // read all markdown file
    const fileNameList = fs.readdirSync(BLOG_FOLDER);
    const postList: Post[] = [];
    for (const fileName of fileNameList) {
        const filePath = path.join(BLOG_FOLDER, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const { data, content, excerpt } = matter(fileContents, {
            excerpt_separator: '<!-- truncate-->',
        });
        postList.push({
            id: fileName,
            slug: data.slug,
            title: data.title,
            brief: excerpt || '',
            mdContent: content,
            tags: data.tags,
            coverImage: data.image,
            author: {
                name: data.author,
                title: data.author_title,
                profileUrl: data.author_url,
                avatarUrl: data.author_image_url,
            },
            publishedAt: new Date().toISOString(),
            categories: data.categories,
        });
    }

    return postList;
}
