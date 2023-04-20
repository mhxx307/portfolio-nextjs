import { path } from '@/constants/path';
import { sideBarMenu, socialIcons } from '@/data/data';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Sidebar({ isOpen }: { isOpen: boolean }) {
    const router = useRouter();
    return (
        <aside
            className={classNames(
                'aside__sidebar mxl:transition__350 fixed left-0 top-0 z-30 h-full w-44 bg-sideBarBg mxl:h-0 mxl:w-full mxl:overflow-hidden',
                { '-translate-x-full': !isOpen },
            )}
        >
            <div className="m-auto flex min-h-[90vh] w-[80%] flex-col justify-between overflow-y-auto mlg:text-center">
                <Link
                    href={path.home}
                    className="z-20 flex flex-col items-center justify-center pt-8 leading-10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 171 210"
                        className="h-auto w-[60px] fill-[cyan]"
                    >
                        <path
                            className="fill-[cyan]"
                            d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194Z"
                        />
                        <path
                            d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
                            fill="white"
                        />
                    </svg>
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
                                        },
                                    )}
                                >
                                    <Icon className="transition__linear mr-[15px] text-[25px] text-colorTem hover:text-anchor mlg:hidden" />
                                    <span className="transition-colors hover:text-colorTem">
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
                                <Icon className="transition__linear mlg:hover:animation__rubberBand mr-[15px] text-[15px] text-colorTem hover:text-anchor" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
