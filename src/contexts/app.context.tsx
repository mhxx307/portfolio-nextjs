import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface AppContextProps {
    isOn: boolean;
    setIsOn: (isOn: boolean) => void;
    isTemplateOpen: boolean;
    openTemplate: () => void;
    closeTemplate: () => void;
    showSearchInput: boolean;
    showInput: () => void;
}

const initialAppContext: AppContextProps = {
    isOn: true,
    setIsOn: () => null,
    isTemplateOpen: false,
    openTemplate: () => null,
    closeTemplate: () => null,
    showSearchInput: false,
    showInput: () => null,
};

export const AppContext = createContext<AppContextProps>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isTemplateOpen, setIsTemplateOpen] = useState(
        initialAppContext.isTemplateOpen,
    );
    const [showSearchInput, setShowSearchInput] = useState(
        initialAppContext.showSearchInput,
    );

    const theme =
        (typeof window !== 'undefined' && localStorage.getItem('theme')) ||
        'light';

    const [isOn, setIsOn] = useState(() => {
        if (theme === 'light') {
            return true;
        } else {
            return false;
        }
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (isOn) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        }

        if (
            localStorage.theme === 'light' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: light)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isOn]);

    // open and close sidebar functionality
    const openTemplate = () => {
        setIsTemplateOpen(true);
    };
    const closeTemplate = () => {
        setIsTemplateOpen(false);
    };
    const showInput = () => {
        setShowSearchInput(true);
    };

    const valueContext = useMemo(() => {
        return {
            isOn,
            setIsOn,
            isTemplateOpen,
            openTemplate,
            closeTemplate,
            showSearchInput,
            showInput,
        };
    }, [isOn, setIsOn, isTemplateOpen, showSearchInput]);

    return (
        <AppContext.Provider value={valueContext}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
