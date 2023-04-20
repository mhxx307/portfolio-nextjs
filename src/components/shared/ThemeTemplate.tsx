import { memo } from 'react';
import { FiSettings } from 'react-icons/fi';
import { BsMoonStars, BsFillSunFill } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';
import { useAppContext } from '@/contexts/app.context';
import classNames from 'classnames';

const ThemeTemplate = () => {
    const { isTemplateOpen, openTemplate, closeTemplate, setIsOn, isOn } =
        useAppContext();

    return (
        <>
            <button
                className="fixed bottom-[30px] right-[40px] z-50 cursor-pointer bg-primaryBg p-[10px] shadow-shadowCustom mss:p-[15px]"
                onClick={openTemplate}
                style={{
                    borderRadius: '50% 50% 0',
                }}
            >
                <FiSettings className="animation__theme text-[35px] text-colorTem" />
            </button>

            <div
                className={classNames(
                    'transition__350__2 fixed bottom-[230px] right-0 z-40 flex h-auto w-auto flex-col bg-themeWrapperBg shadow-shadowCustom mss:p-[7px]',
                    {
                        'translate-x-[0%]': isTemplateOpen,
                        'translate-x-[110%]': !isTemplateOpen,
                    },
                )}
                style={{
                    borderRadius: '50px 0 0 20px',
                }}
            >
                <div className="mb-[30px] flex w-[400px] justify-between p-[30px]">
                    <span className="text-base font-medium text-primary">
                        Theme Template
                    </span>
                    <span className="text-base font-medium text-primary">
                        <BsXLg
                            onClick={closeTemplate}
                            className="transition__02 cursor-pointer text-[20px] text-colorTem hover:rotate-[360deg]"
                        />
                    </span>
                </div>

                <div className="flex items-center justify-center space-x-4 pb-[60px]">
                    <button
                        className={`group rounded-md p-5 text-[28px] shadow-shadowCustom ${
                            !isOn
                                ? 'border-[1px] border-solid border-colorTem'
                                : ''
                        }`}
                        onClick={() => setIsOn(false)}
                    >
                        <BsFillSunFill className="transition__02__1 fill-colorTem group-hover:rotate-[360deg]" />
                    </button>
                    <button
                        className={`group rounded-md p-5 text-[28px] shadow-shadowCustom ${
                            isOn
                                ? 'border-[1px] border-solid border-colorTem'
                                : ''
                        }`}
                        onClick={() => setIsOn(true)}
                    >
                        <BsMoonStars className="transition__02__1 fill-colorTem group-hover:rotate-[360deg]" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default memo(ThemeTemplate);
