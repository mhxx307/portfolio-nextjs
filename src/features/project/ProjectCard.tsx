import { Fade } from '@/components/shared';
import { ProjectType } from '@/data/project';
import Image from 'next/image';

interface Props {
    project: ProjectType;
}

function ProjectCard({ project }: Props) {
    return (
        <Fade direction="bottom" className="col-span-1">
            <section className="group relative h-[250px] w-full overflow-hidden border-[2px] border-solid border-[saddlebrown]">
                <Image
                    src={project.imgUrl}
                    alt={project.name}
                    className="h-full w-full object-cover"
                    width={500}
                    height={500}
                />
                <div className="absolute left-0 top-0 h-full w-full translate-y-full bg-[#1c0800dd] text-center transition-all duration-[250ms] group-hover:translate-y-0">
                    <p className="mt-[20px] text-base text-white">
                        {project.name}
                    </p>
                    <p className="m-auto w-[200px] text-center text-sm">
                        {project.desc}
                    </p>
                    <div className="bottom-[10px] mt-[30px] text-white">
                        <h2 className="text-xl text-colorTem">Built with</h2>
                        <span className="text-xs">{project.stack}</span>
                    </div>
                    <div className="absolute bottom-[60px] left-[15px]">
                        <a
                            href={project.gitHubUrl.url}
                            className="mb-[3px] block text-[25px] text-white"
                        >
                            <project.gitHubUrl.icon />
                        </a>
                        <a
                            href={project.website.url}
                            className="block text-[25px] text-white"
                        >
                            <project.website.icon />
                        </a>
                    </div>
                </div>
            </section>
        </Fade>
    );
}

export default ProjectCard;
