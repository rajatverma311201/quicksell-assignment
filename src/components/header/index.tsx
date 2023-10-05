import React, { useState } from "react";

import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BiChevronDown } from "react-icons/bi";
import "./Header.css";
import { GROUPING_LIST, ORDERING_LIST } from "../../utils/constants";
import { useGrouping, useOrdering } from "../../hooks";
import { Grouping, Ordering } from "types";
import { DarkModeBtn } from "./DarkModeBtn";
export function Header() {
    const [checked, setChecked] = useState(false);

    const { grouping, setGrouping } = useGrouping();
    const { ordering, setOrdering } = useOrdering();

    const handleClose = () => setChecked(false);

    return (
        <header className="header">
            <div className="display-settings-btn">
                <div
                    onClick={(e) => {
                        setChecked((s) => !s);
                    }}
                >
                    <HiAdjustmentsHorizontal className="display-settings-btn__icon" />
                    Display
                    <BiChevronDown
                        className={checked ? "icon-2 active" : "icon-2"}
                    />
                </div>
                <input
                    className="settings-checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => {
                        setChecked(e.target.checked);
                    }}
                />
                <form>
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

                    <label htmlFor="ordering" className="form__label">
                        Ordering
                    </label>

                    <select
                        name="ordering"
                        id="ordering"
                        className="form__input form__input--ordering"
                        value={ordering}
                        onChange={(e) => {
                            setOrdering(e.target.value as Ordering);
                            handleClose();
                        }}
                    >
                        {ORDERING_LIST.map((ordering) => (
                            <option key={ordering} value={ordering}>
                                {ordering}
                            </option>
                        ))}
                    </select>

                    {/* <input id="ordering" type="text" className="form__input" /> */}
                </form>
            </div>

            <DarkModeBtn />
        </header>
    );
}
