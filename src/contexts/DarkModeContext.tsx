import { ReactNode, createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks";

interface DarkModeCtx {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeCtx>({
    isDarkMode: false,
    toggleDarkMode: () => {},
});

interface DarkModeProviderProps {
    children: ReactNode;
}
export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
    children,
}) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(
        false,
        "isDarkMode"
    );

    useEffect(
        function () {
            if (isDarkMode) {
                document.documentElement.classList.add("dark-mode");
                document.documentElement.classList.remove("light-mode");
            } else {
                document.documentElement.classList.add("light-mode");
                document.documentElement.classList.remove("dark-mode");
            }
        },
        [isDarkMode]
    );

    function toggleDarkMode() {
        setIsDarkMode((isDark: boolean) => !isDark);
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
export default DarkModeProvider;
