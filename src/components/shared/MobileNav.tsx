import { sideBarMenu } from '@/data/data';
import classNames from 'classnames';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

interface MobileNavProps {
    className?: string;
}

const MobileNav = ({ className }: MobileNavProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={classNames(
                'relative z-50 block bg-primaryBg text-white md:hidden',
                className,
            )}
        >
            <div className="absolute right-0">
                <Hamburger toggled={open} toggle={setOpen} />
            </div>
            <ul
                className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-300 ease-in dark:bg-primaryBg ${
                    open ? 'top-[100%]' : 'top-[-490px]'
                }`}
            >
                {sideBarMenu.map((item, index) => (
                    <li key={index} className="my-7 text-xl md:my-0 md:ml-8">
                        <Link
                            href={item.url}
                            className="text-black dark:text-white"
                        >
                            <span className="transition-colors hover:text-colorTem ">
                                {item.text}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileNav;
