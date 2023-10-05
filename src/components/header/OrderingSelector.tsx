import React from "react";
import { ORDERING_LIST } from "../../utils/constants";
import { Ordering } from "types";

interface OrderingSelectorProps {
    ordering: Ordering;
    setOrdering: (grp: Ordering) => void;
    handleClose: () => void;
}
export const OrderingSelector: React.FC<OrderingSelectorProps> = ({
    ordering,
    setOrdering,
    handleClose,
}) => {
    return (
        <>
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
        </>
    );
};
