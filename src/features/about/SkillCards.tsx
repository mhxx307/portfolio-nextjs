import { Fade } from '@/components/shared';
import { skillSet } from '@/data/data';

function SkillCards() {
    return (
        <div className="mt-[50px] grid grid-cols-5 gap-4 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {skillSet.map((item, index) => (
                <Fade
                    direction="bottom"
                    key={index + item.spanText}
                    className="relative col-span-1 rounded-[5px] p-[15px] bg-blend-hard-light shadow-shadowCustom transition-all after:absolute after:left-0 after:top-0 after:block after:h-[2px] after:w-0 after:bg-colorTem after:transition-all after:content-[''] hover:bg-colorTem hover:after:w-full hover:after:translate-y-[-10px] dark:bg-primaryBg dark:hover:bg-colorTem"
                >
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center"
                    >
                        <item.icon className="text-4xl text-colorTem group-hover:fill-white" />
                        <span className="mt-[10px] block text-sm capitalize text-black group-hover:text-white dark:text-white">
                            {item.spanText}
                        </span>
                    </a>
                </Fade>
            ))}
        </div>
    );
}

export default SkillCards;
