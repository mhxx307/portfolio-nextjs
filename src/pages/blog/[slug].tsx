import { BaseLayout } from '@/components/layouts';
import { Post } from '@/types/post';
import { getPostList } from '@/utils/post';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import remarkToc from 'remark-toc';
import rehypeStringify from 'rehype-stringify';
import { path } from '@/constants/path';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';
import remarkPrism from 'remark-prism';
import Script from 'next/script';
import { categories } from '@/constants/post';
import Image from 'next/image';

interface Props {
    post: Post;
    relatedPosts: Post[];
}

function BlogDetail({ post, relatedPosts }: Props) {
    if (!post) {
        return <div>No post</div>;
    }

    return (
        <div>
            <header className="flex h-[100px] items-center">
                <div className="h-full bg-black px-5">Q</div>
                <Link
                    href={path.blog}
                    className="ml-10 flex items-center justify-center text-colorTem transition-colors hover:text-anchor"
                >
                    <IoIosArrowRoundBack />
                    Back to blog
                </Link>
            </header>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1"></div>
                <div className="col-span-12 border-l-[1px] border-r-[1px] border-t-[2px] border-solid border-[#3c3b3b] border-t-[#E4EE89] px-10 py-12 md:col-span-8">
                    <h1 className="relative mb-14 font-helvetica text-2xl font-bold text-[#5a6072] before:absolute before:left-[-2rem] before:mt-[-1rem] before:font-belle before:text-[18px] before:text-[#515152] before:content-['<h1>'] after:absolute after:left-[-2rem] after:top-32 after:font-belle after:text-[18px] after:text-[#515152] after:content-['<h1>'] dark:text-white ss:text-3xl  sm:text-4xl md:text-6xl">
                        {post.title}
                    </h1>
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        className="mb-14 h-[300px] w-full object-cover"
                        width={800}
                        height={300}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.htmlContent || '',
                        }}
                    />
                </div>
                <div className="hidden md:col-span-3 md:block">
                    <div>
                        <h2 className="">Thể loại:</h2>
                        <ul className="pl-6">
                            {categories.map((tag) => (
                                <li key={tag} className="list-disc">
                                    <Link
                                        href={tag}
                                        className="text-black hover:underline dark:text-[#868e9a]"
                                    >
                                        {tag}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="">Tag:</h2>
                        <ul className="pl-6">
                            {post.tags.map((tag) => (
                                <li key={tag} className="list-disc">
                                    <Link
                                        href={tag}
                                        className="text-black hover:underline dark:text-[#868e9a]"
                                    >
                                        {tag}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="">Bài viết liên quan:</h2>
                        <ul className="pl-6">
                            {relatedPosts &&
                                relatedPosts.map((post) => (
                                    <li key={post.id} className="list-disc">
                                        <Link
                                            href={post.slug}
                                            className="text-black hover:underline dark:text-[#868e9a]"
                                        >
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>

            <Script src="/prism.js" strategy="afterInteractive"></Script>
        </div>
    );
}

export default BlogDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const postList = await getPostList();
    return {
        paths: postList.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props> = async (
    context: GetStaticPropsContext,
) => {
    const postList = await getPostList();
    const slug = context.params?.slug;
    const post = postList.find((p) => p.slug === slug);
    const relatedPosts = postList.filter((p) => {
        return p.tags.some((tag) => post?.tags.includes(tag));
    });
    console.log(relatedPosts);

    if (!slug || !post || !relatedPosts) {
        return {
            notFound: true,
        };
    }

    const file = await unified()
        .use(remarkParse)
        .use(remarkToc, { heading: 'agenda.*' })
        .use(remarkPrism)
        .use(remarkRehype)
        .use(rehypeDocument, { title: post.title })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(post.mdContent || '');

    // parse to html
    post.htmlContent = file.toString();

    return {
        props: {
            post: post,
            relatedPosts: relatedPosts,
        },
    };
};

// eslint-disable-next-line react/display-name
BlogDetail.Layout = (page: any) => (
    <BaseLayout showSidebar={false}>{page}</BaseLayout>
);
