import { createContext, useContext } from 'react';

export interface AppContextProps {
    value: string;
}

const initialAppContext: AppContextProps = {
    value: '',
};

export const AppContext = createContext<AppContextProps>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppContext.Provider value={{ value: 'hello' }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
