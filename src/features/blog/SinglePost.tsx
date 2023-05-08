import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Post } from '@/types/post';
import Link from 'next/link';
import { path } from '@/constants/path';

interface Props {
    postItem: Post;
}

function SinglePost({ postItem }: Props) {
    const { title, brief, coverImage, slug } = postItem;

    return (
        <article className="section__article">
            <Image
                src={coverImage}
                alt={title}
                className="h-[40%] w-full object-cover"
                width={500}
                height={300}
            />
            <div className="p-4">
                <Tippy content={<span>{title}</span>}>
                    <Link href={`${path.blog}/${slug}`}>
                        <h2 className="cursor-pointer truncate text-sm font-normal text-colorTem hover:underline">
                            {title}
                        </h2>
                    </Link>
                </Tippy>

                <p className="mt-4 line-clamp-3">{brief}</p>
                <Tippy content={<span>{title}</span>}>
                    <Link
                        className="text-colorTem"
                        href={`${path.blog}/${slug}`}
                    >
                        Read more
                    </Link>
                </Tippy>
            </div>
        </article>
    );
}

export default SinglePost;
