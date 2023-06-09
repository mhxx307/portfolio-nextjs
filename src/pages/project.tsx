import { Fade, Head, TextSpan } from '@/components/shared';
import { projects } from '@/data/project';
import { ProjectCard } from '@/features/project';

function ProjectPage() {
    return (
        <>
            <Head
                title="Dự án của La Võ Minh Quân"
                description="La Võ Minh Quân là một developer, blogger trẻ với nhiều tham vọng. Tổng hợp dự án của La Võ Minh Quân"
            />
            <section className="section__padding mx-0 my-[120px]">
                <div className="fake-big">Projects</div>
                <TextSpan
                    text="Dự án của tôi"
                    className="mb-8 block text-4xl text-colorTem md:text-5xl xl:text-6xl"
                />
                <div className="mb-8 w-full max-w-[600px]">
                    <Fade direction="bottom">
                        <p>
                            {/* Here are some selected and challenging personal projects
                            that I have worked on so far which enabled me to level
                            up my skills to a fascinating point that makes me feel
                            confident in tackling more difficult challenges. */}
                            Dưới đây là một số dự án cá nhân được lựa chọn mà
                            tôi đã làm cho đến nay.
                        </p>
                    </Fade>
                </div>
                <div className="grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    {projects.map((project) => {
                        return (
                            <ProjectCard project={project} key={project.id} />
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default ProjectPage;
