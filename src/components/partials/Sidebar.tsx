import { path } from '@/constants/path';
import { sideBarMenu, socialIcons } from '@/data/data';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Sidebar({ isOpen }: { isOpen: boolean }) {
    const router = useRouter();
    return (
        <aside
            className={classNames(
                'aside__sidebar mxl:transition__350 fixed left-0 top-0 z-30 h-full w-40 bg-lightBg dark:bg-sideBarBg mxl:h-0 mxl:w-full mxl:overflow-hidden',
                { '-translate-x-full': !isOpen },
            )}
        >
            <div className="m-auto flex min-h-[90vh] w-[80%] flex-col justify-between overflow-y-auto mlg:text-center">
                <Link
                    href={path.home}
                    className="z-20 flex flex-col items-center justify-center pt-8 leading-10"
                >
                    <Image
                        src="/images/logo-no-background.png"
                        alt="logo"
                        className="h-auto w-[60px]"
                        width={500}
                        height={500}
                    />
                    <span className="text-white">La Võ Minh Quân</span>
                </Link>

                {/* nav */}
                <ul className="space-y-6">
                    {sideBarMenu.map((item, index) => {
                        const { text, url, icon: Icon } = item;
                        const isActive = url === router.pathname;
                        return (
                            <li
                                key={index}
                                className="relative leading-7 mlg:font-bold mlg:leading-[2.8]"
                            >
                                <Link
                                    href={url}
                                    key={index}
                                    className={classNames(
                                        'transition__250 flex items-center',
                                        {
                                            'text-colorTem': isActive,
                                            'text-[#5a6072]': !isActive,
                                        },
                                    )}
                                >
                                    <Icon className="transition__linear mr-[15px] text-[25px] text-colorTem hover:text-anchor mlg:hidden" />
                                    <span className="transition-colors hover:text-colorTem ">
                                        {text}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* social icon */}
                <div className="flex flex-wrap gap-2 mxl:text-center">
                    {socialIcons.map((item, index) => {
                        const { icon: Icon, url } = item;
                        return (
                            <a href={url} key={index}>
                                <Icon className="transition__linear mlg:hover:animation__rubberBand mr-[15px] text-[15px] text-anchor hover:text-colorTem" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
