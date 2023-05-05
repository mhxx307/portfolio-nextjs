import { Fade } from '@/components/shared';
import { BlogType, blogData } from '@/data/blogData';
import { SinglePost } from '@/features/blog';
import { useEffect, useState } from 'react';

function Blog() {
    const [blog, setBlog] = useState<BlogType[]>([]);

    useEffect(() => {
        setBlog(blogData);
    }, []);

    return (
        <Fade>
            <section className="section__padding mx-0 my-[100px]">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {blog.length > 0 &&
                        blog.map((postItem) => {
                            return (
                                <SinglePost
                                    key={postItem._id}
                                    postItem={postItem}
                                />
                            );
                        })}
                </div>
            </section>
        </Fade>
    );
}

export default Blog;
