import React, { useEffect, useState } from "react";

import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BiChevronDown } from "react-icons/bi";
import "./Header.css";
export function Header() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.log("Header.tsx: useEffect: checked: ", checked);
    }, [checked]);

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
                    <input id="grouping" type="text" className="form__input" />

                    <label htmlFor="ordering" className="form__label">
                        Ordering
                    </label>
                    <input id="ordering" type="text" className="form__input" />
                </form>
            </div>
        </header>
    );
}
