import { Fade, Head, TextSpan } from '@/components/shared';
import { SkillCards } from '@/features/about';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation('about');

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
                            <p className="mt-8">{t('about1')}</p>
                        </Fade>
                        <Fade direction="bottom">
                            <p>{t('about2')}</p>
                        </Fade>
                        <Fade direction="bottom">
                            <p>{t('about3')}</p>
                        </Fade>
                        <Fade direction="bottom">
                            <p>{t('cv')}</p>
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
                                        {t('download')}
                                    </span>
                                </div>
                            </a>
                        </Fade>

                        <Fade direction="bottom" className="mt-12">
                            <h2>🥇🥇{t('prize')}:</h2>
                            <p>- {t('prize_content')}</p>
                        </Fade>

                        <Fade direction="bottom" className="mt-12">
                            <h2>🥇📚{t('education')}:</h2>
                            <p className="text-black dark:text-anchor">
                                -{' '}
                                <strong className="text-white">
                                    {t('education1')}
                                </strong>{' '}
                                - {t('education2')}
                            </p>
                        </Fade>

                        <Fade direction="bottom" className="mt-12">
                            <h2>🥇💋{t('language')}:</h2>
                            <p>- {t('english')}</p>
                            <p className="text-black dark:text-anchor">
                                {t('english_content')}
                            </p>
                            <p>- {t('vietnam')}</p>
                            <p className="text-black dark:text-anchor">
                                {t('vietnam_content')}
                            </p>
                        </Fade>

                        <Fade direction="bottom" className="mt-12">
                            <h2>🥇☎️{t('contact')}</h2>
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
                    <h2>🥇🔧{t('skill')}</h2>
                    <p>{t('skill_content')}</p>
                </Fade>
                <Fade direction="bottom" className="mt-14">
                    <h3 className="text-xl text-black dark:text-white">
                        🥈🔠{t('program_language')}
                    </h3>
                    <p>- Javascript, TypeScript, Java, C/C++, Python.</p>
                    <p>- {t('skill_confident')}</p>
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
