import { path } from '@/constants/path';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { TextSpan } from '@/components/shared';

function Header() {
    const [showSecondText, setShowSecondText] = useState(false);
    const [showThirdText, setShowThirdText] = useState(false);

    useEffect(() => {
        const secondTimeout = setTimeout(() => setShowSecondText(true), 1000);
        const thirdTimeout = setTimeout(() => setShowThirdText(true), 1500);
        return () => {
            clearTimeout(secondTimeout);
            clearTimeout(thirdTimeout);
        };
    }, []);

    return (
        <section className="section__padding relative flex min-h-[100vh] items-center">
            <main className="intro-page">
                <h1 className="font-helvetica text-2xl font-bold text-[#5a6072] dark:text-white 4xl:text-[10rem] 4xl:leading-[9rem] 4xl:tracking-[-4px] m4xl:text-8xl mlg:text-7xl mmd:text-5xl mss:text-4xl">
                    Hi, <br />{' '}
                    <TextSpan
                        text="Mình là"
                        className="inline"
                        animation="rotate"
                    />{' '}
                    <span className="text-colorTem">Q</span>
                    {showSecondText && (
                        <TextSpan text="uân," className="inline" />
                    )}{' '}
                    <br />{' '}
                    {showThirdText && <TextSpan text="một lập trình viên" />}
                    {!showThirdText && (
                        <span className="text-transparent">
                            Một lập tình viên
                        </span>
                    )}
                </h1>
                <p className="animation__fadeIn mx-0 my-[30px] text-[1em] text-black dark:text-white 4xl:text-2xl m4xl:text-xl mlg:text-[0.9rem] mmd:text-[0.875rem] mss:text-[0.87em]">
                    Front-end developer
                </p>
                <Link
                    href={path.contact}
                    className="animation__fadeInBackwards relative mx-0 my-[50px] block h-[50px] w-full max-w-[200px] whitespace-nowrap leading-[50px]"
                >
                    <div className="border__radius group relative h-full w-full overflow-hidden">
                        <span className="transform__skew group-hover:border__radius absolute -left-[5%] top-0 h-full w-0 group-hover:w-[110%] group-hover:bg-colorTem " />
                        <span className="border__radius absolute left-0 top-0 h-full w-full border-[1px] border-solid border-colorTem" />
                        <span className="absolute left-0 h-full w-full text-center hover:text-[#2d2b2b]">
                            Liên hệ tôi
                        </span>
                    </div>
                </Link>
            </main>
        </section>
    );
}

export default Header;
