import { Fade, TextSpan } from '@/components/shared';
import { SkillCards } from '@/features/about';

function About() {
    return (
        <div className="section__padding grid grid-cols-1">
            <div className="fake-big">About</div>
            <article className="section-about-description grid grid-cols-12 pt-[100px]">
                <div className="col-span-5">
                    <h2
                        aria-label="About and skills"
                        className="font-helvetica text-2xl font-bold dark:text-white m4xl:text-6xl mlg:text-5xl mmd:text-4xl mss:text-3xl"
                    >
                        <TextSpan
                            text="About & skill"
                            className="text-colorTem"
                        />
                    </h2>
                    <Fade direction="bottom">
                        <p className="mt-8">
                            I’m an ambitious Front-End Developer who is
                            passionate about coding and looking for a role in
                            the established IT company with the opportunity to
                            work with the latest technologies on challenging and
                            diverse projects.
                        </p>
                    </Fade>
                    <Fade direction="bottom">
                        <p>
                            I’m from Ivory Coast but currently living in
                            Nigeria. I’m a freelancer who loves building cool UI
                            effects, dynamic webpages with amazing animations
                            and creating intuitive, dynamic user experiences. I
                            also love to reach out to new opportunities accross
                            the globe that will enhance my skills and get the
                            opporutinity to work with other programmers as well
                        </p>
                    </Fade>
                    <Fade direction="bottom">
                        <p>
                            If I could say one of the most interesting things
                            about me, it is the fact that I am always ready for
                            any challenges that comes to my way. Here is my CV
                            below for more details.
                        </p>
                    </Fade>
                    <Fade direction="left">
                        <a
                            href={'*'}
                            download
                            className="animation__fadeInBackwards relative mx-0 my-[50px] block h-[50px] w-full max-w-[200px] whitespace-nowrap leading-[50px]"
                        >
                            <div className="border__radius group relative h-full w-full overflow-hidden">
                                <span className="transform__skew group-hover:border__radius absolute -left-[5%] top-0 h-full w-0 group-hover:w-[110%] group-hover:bg-colorTem " />
                                <span className="border__radius absolute left-0 top-0 h-full w-full border-[1px] border-solid border-colorTem" />
                                <span className="absolute left-0 h-full w-full text-center hover:text-[#2d2b2b]">
                                    Tải xuống CV
                                </span>
                            </div>
                        </a>
                    </Fade>
                </div>
            </article>
            {/* programming language cards */}
            <SkillCards />
        </div>
    );
}

export default About;
