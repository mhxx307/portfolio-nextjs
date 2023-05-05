import { BaseLayout } from '@/components/layouts';
import { Post } from '@/types/post';
import { getPostList } from '@/utils/post';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import { LogoAnimation } from '@/components/shared';

interface Props {
    post: Post;
}

function BlogDetail({ post }: Props) {
    if (!post) {
        return <div>No post</div>;
    }

    return (
        <div>
            <header className="h-[100px] flex-col">
                <LogoAnimation />
                <button>back to home</button>
            </header>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1"></div>
                <div className="col-span-8 border-l-[1px] border-r-[1px] border-t-[2px] border-solid border-[#3c3b3b] border-t-[#E4EE89] px-10 py-12">
                    {post.title}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.htmlContent || '',
                        }}
                    />
                </div>
                <div className="col-span-3">categories</div>
            </div>
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
    if (!slug || !post) {
        return {
            notFound: true,
        };
    }

    const file = await unified()
        .use(remarkParse)
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
        },
    };
};

// eslint-disable-next-line react/display-name
BlogDetail.Layout = (page: any) => (
    <BaseLayout showSidebar={false}>{page}</BaseLayout>
);
