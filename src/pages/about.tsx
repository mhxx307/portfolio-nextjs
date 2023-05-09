import { Fade, Head, TextSpan } from '@/components/shared';
import { SkillCards } from '@/features/about';

function About() {
    return (
        <>
            <Head
                title="Profile của La Võ Minh Quân"
                description="La Võ Minh Quân là một developer, blogger trẻ với nhiều tham vọng."
            />
            <div className="section__padding grid grid-cols-1">
                <div className="fake-big">About</div>
                <article className="section-about-description grid grid-cols-12 pt-[100px]">
                    <div className="col-span-12 md:col-span-5">
                        <h2
                            aria-label="About and skills"
                            className="font-helvetica text-2xl font-bold dark:text-white m4xl:text-6xl mlg:text-5xl mmd:text-4xl mss:text-3xl"
                        >
                            <TextSpan
                                text="Mình là ai?"
                                className="text-colorTem"
                            />
                        </h2>
                        <Fade direction="bottom">
                            <p className="mt-8">
                                {/* I’m an ambitious Front-End Developer who is
                                passionate about coding and looking for a role in
                                the established IT company with the opportunity to
                                work with the latest technologies on challenging and
                                diverse projects. */}
                                Tôi là một lập trình viên Front-End, đang tìm
                                kiếm một vị trí trong một công ty IT có uy tín
                                với cơ hội làm việc với các công nghệ mới nhất
                                trên các dự án đa dạng và thách thức.
                            </p>
                        </Fade>
                        <Fade direction="bottom">
                            <p>
                                {/* I’m a freelancer who loves building cool UI effects,
                                dynamic webpages with amazing animations and
                                creating intuitive, dynamic user experiences. I also
                                love to reach out to new opportunities accross the
                                globe that will enhance my skills and get the
                                opporutinity to work with other programmers as well */}
                                Tôi là một freelancer yêu thích xây dựng các
                                trang web và ứng dụng di động. Ngoài ra tôi còn
                                thích chỉnh sửa video và hình ảnh.
                            </p>
                        </Fade>
                        <Fade direction="bottom">
                            <p>
                                Tôi là sinh viên năm 4 của trường đại học công
                                nghiệp Thành Phố Hồ Chí Minh, chuyên ngành kĩ
                                thuật phần mềm chất lượng cao. Tôi đã có nhiều
                                dự án cá nhân trong quá trình học tập và làm
                                việc. Tôi có thể làm việc độc lập và làm việc
                                nhóm tốt.
                            </p>
                        </Fade>
                        <Fade direction="bottom">
                            <p>
                                {/* If I could say one of the most interesting things
                                about me, it is the fact that I am always ready for
                                any challenges that comes to my way. Here is my CV
                                below for more details. */}
                                Đây là CV của tôi bên dưới để biết thêm chi
                                tiết.
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

                        <Fade direction="bottom" className="mt-12">
                            <h2>🥇🥇Giải thưởng:</h2>
                            <p>
                                - Học bổng toàn phần học kỳ 2 năm học 2021 -
                                2022
                            </p>
                        </Fade>

                        <Fade direction="bottom" className="mt-12">
                            <h2>🥇📚Giáo dục:</h2>
                            <p className="text-black dark:text-anchor">
                                -{' '}
                                <strong className="text-white">
                                    Trường đại học Công Nghiệp Thành Phố Hồ Chí
                                    Minh
                                </strong>{' '}
                                - chuyên ngành kĩ thuật phần mềm, 2019 - 2023
                            </p>
                        </Fade>

                        <Fade direction="bottom" className="mt-12">
                            <h2>🥇💋Ngôn ngữ:</h2>
                            <p>- Tiếng Anh</p>
                            <p className="text-black dark:text-anchor">
                                Đọc hiểu các tài liệu chuyên ngành. Giao tiếp
                                trung bình.
                            </p>
                            <p>- Tiếng Việt</p>
                            <p className="text-black dark:text-anchor">
                                Người bản ngữ.
                            </p>
                        </Fade>

                        <Fade direction="bottom" className="mt-12">
                            <h2>🥇☎️Thông tin liên hệ</h2>
                            <p>
                                - 📞Phone:{' '}
                                <span className="text-black dark:text-white">
                                    0788 778 579
                                </span>
                            </p>
                            {/* <p>- 🚀Telegram: https://telegram.me/realdtdgroup</p> */}
                            <p>- Email: minhquan.lavo@gmail.com</p>
                            <p>- ✍🏻Website: https://lavominhquan.com/</p>
                            <p>- Github: https://github.com/mhxx</p>
                            {/* <p>
                                - 🔗Facebook: https://www.facebook.com/duthanhduoc/
                            </p> */}
                        </Fade>
                    </div>
                </article>

                {/* programming language cards */}
                <Fade direction="bottom" className="mt-14">
                    <h2>🥇🔧Kỹ năng</h2>
                    <p>Tôi có thể làm việc với các kĩ năng sau:</p>
                </Fade>
                <Fade direction="bottom" className="mt-14">
                    <h3 className="text-xl text-black dark:text-white">
                        🥈🔠Ngôn ngữ lập trình
                    </h3>
                    <p>- Javascript, TypeScript, Java, C/C++, Python.</p>
                    <p>
                        - Tôi khá là tự tin rằng mình có thể học nhanh các ngôn
                        ngữ khác khi cần thiết.
                    </p>
                </Fade>
                <Fade direction="bottom" className="mt-12">
                    <h3 className="text-xl text-black dark:text-white">
                        🥈💻Công nghệ web front-end
                    </h3>
                    <p>
                        - React, Next.js, Styled Components, Sass, Webpack,
                        HTML5, CSS3, tailwind, material ui.
                    </p>
                </Fade>
                <Fade direction="bottom" className="mt-12">
                    <h3 className="text-xl text-black dark:text-white">
                        🥈🧮Công nghệ web back-end
                    </h3>
                    <p>- Giao thức: REST, HTTP(S)</p>
                    <p>- Frameworks/Libraries: Node.js, Express.js</p>
                    <p>- Databases: MongoDB, Postgresql, MySQL, SQLServer</p>
                    <p>
                        Cloud Services: AWS (EC2, S3), Vercel, Netlify, Render,
                        Supabase, Firebase
                    </p>
                    <p>(Tôi đã không còn sử dụng AWS một khoảng thời gian)</p>
                </Fade>
                <Fade direction="bottom" className="mt-12">
                    <h3 className="text-xl text-black dark:text-white">
                        🥈🧮Công nghệ mobile
                    </h3>
                    <p>- React native </p>
                </Fade>
                <Fade direction="bottom" className="mt-12">
                    <h3 className="text-xl text-black dark:text-white">
                        🥈💁🏻‍♂️Các kỹ năng cá nhân:
                    </h3>
                    <p>- Teamwork, SEO, chỉnh sửa video</p>
                </Fade>
                <SkillCards />
            </div>
        </>
    );
}

export default About;
