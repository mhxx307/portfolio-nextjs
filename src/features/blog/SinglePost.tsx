import { BlogType } from '@/data/blogData';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

interface Props {
    postItem: BlogType;
}

function SinglePost({ postItem }: Props) {
    const { title, brief, coverImage, url } = postItem;

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
                    <h2 className="cursor-pointer truncate hover:underline">
                        {title}
                    </h2>
                </Tippy>

                <p className="mt-4 line-clamp-3">{brief}</p>
                <Tippy content={<span>{title}</span>}>
                    <a className="text-colorTem" href={url}>
                        Read more
                    </a>
                </Tippy>
            </div>
        </article>
    );
}

export default SinglePost;
