import { GROUPING_LIST } from "../../utils/constants";
import { Grouping } from "types";

interface GroupingSelectorProps {
    grouping: Grouping;
    setGrouping: (grp: Grouping) => void;
    handleClose: () => void;
}
export const GroupingSelector: React.FC<GroupingSelectorProps> = ({
    grouping,
    setGrouping,
    handleClose,
}) => {
    return (
        <>
            <label htmlFor="grouping" className="form__label">
                Grouping
            </label>

            <select
                name="grouping"
                id="grouping"
                className="form__input form__input--ordering"
                value={grouping}
                onChange={(e) => {
                    setGrouping(e.target.value as Grouping);
                    handleClose();
                }}
            >
                {GROUPING_LIST.map((grouping) => (
                    <option key={grouping} value={grouping}>
                        {grouping}
                    </option>
                ))}
            </select>
        </>
    );
};
