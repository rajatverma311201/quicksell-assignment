import { useState } from "react";

import "./Header.css";
import { useGrouping, useOrdering } from "../../hooks";
import { Grouping, Ordering } from "types";
import { DarkModeBtn } from "./DarkModeBtn";
import { GroupingSelector } from "./GroupingSelector";
import { OrderingSelector } from "./OrderingSelector";
import { DisplaySettingsBtn } from "./DisplaySettingsBtn";

export function Header() {
    const [checked, setChecked] = useState(false);

    const { grouping, setGrouping } = useGrouping();
    const { ordering, setOrdering } = useOrdering();

    const handleClose = () => setChecked(false);

    return (
        <header className="header">
            <div className="display-settings-btn">
                <DisplaySettingsBtn checked={checked} setChecked={setChecked} />
                <input
                    className="settings-checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => {
                        setChecked(e.target.checked);
                    }}
                />
                <form>
                    <GroupingSelector
                        grouping={grouping as Grouping}
                        setGrouping={setGrouping}
                        handleClose={handleClose}
                    />
                    <OrderingSelector
                        ordering={ordering as Ordering}
                        setOrdering={setOrdering}
                        handleClose={handleClose}
                    />
                </form>
            </div>

            <DarkModeBtn />
        </header>
    );
}
