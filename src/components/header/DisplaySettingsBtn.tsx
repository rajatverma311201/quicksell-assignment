import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BiChevronDown } from "react-icons/bi";

type CheckCbType = (val: boolean) => boolean;
interface DisplaySettingsBtnProps {
    checked: boolean;
    setChecked: (check: boolean | CheckCbType) => void;
}
export const DisplaySettingsBtn: React.FC<DisplaySettingsBtnProps> = ({
    checked,
    setChecked,
}) => {
    return (
        <>
            <div
                onClick={(e) => {
                    setChecked((s: boolean) => !s);
                }}
            >
                <HiAdjustmentsHorizontal className="display-settings-btn__icon" />
                Display
                <BiChevronDown
                    className={checked ? "icon-2 active" : "icon-2"}
                />
            </div>
        </>
    );
};
