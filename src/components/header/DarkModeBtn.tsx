import { BiMoon, BiSun } from "react-icons/bi";
import { useDarkMode } from "../../hooks";

export const DarkModeBtn = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div id="dark-mode-btn" onClick={toggleDarkMode}>
            {!isDarkMode && <BiSun className="icon-light-mode" />}
            {isDarkMode && <BiMoon className="icon-dark-mode" />}
        </div>
    );
};
