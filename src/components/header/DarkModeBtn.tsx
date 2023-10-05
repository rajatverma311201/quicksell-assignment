import { BiMoon, BiSun } from "react-icons/bi";
import { useDarkMode } from "../../hooks";

export const DarkModeBtn = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div id="dark-mode-btn" onClick={toggleDarkMode}>
            <BiSun className="icon-light-mode" />
            <BiMoon className="icon-dark-mode" />
        </div>
    );
};
