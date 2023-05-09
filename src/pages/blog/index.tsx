import { Fade, Head } from '@/components/shared';
import { SinglePost } from '@/features/blog';
import { Post } from '@/types/post';
import { getPostList } from '@/utils/post';
import { GetStaticProps } from 'next';

interface Props {
    posts: Post[];
}

function Blog({ posts }: Props) {
    return (
        <>
            <Head
                title="La Võ Minh Quân Blog - Kiến thức lập trình chuyên sâu"
                description="Blog về các kỹ thuật lập trình, blockchain, marketing, đời sống, game, anime, manga được cập nhật liên tục bởi La Võ Minh Quân"
            />
            <Fade className="py-[100px]">
                <section className="section__padding mx-0">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        {posts.length > 0 &&
                            posts.map((postItem) => {
                                return (
                                    <SinglePost
                                        key={postItem.id}
                                        postItem={postItem}
                                    />
                                );
                            })}
                    </div>
                </section>
            </Fade>
        </>
    );
}

export default Blog;

export const getStaticProps: GetStaticProps<Props> = async () => {
    // convert markdown file into list of javascript obj
    const postList = await getPostList();

    return {
        props: {
            posts: postList,
        },
    };
};
