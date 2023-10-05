import { Grouping, Ordering } from "types";
import { createContext, useEffect, useState } from "react";
import { DISPLAY_KEY, GROUPING, ORDERING } from "../utils/constants";
import { useLocalStorageState } from "../hooks";

interface DisplayCtx {
    grouping: Grouping;
    setGrouping: (grouping: Grouping) => void;
    ordering: Ordering;
    setOrdering: (ordering: Ordering) => void;
}

export const DisplayContext = createContext<DisplayCtx>({
    grouping: GROUPING.STATUS,
    setGrouping: (grp: Grouping) => {},
    ordering: ORDERING.PRIORITY,
    setOrdering: (ord: Ordering) => {},
});

interface DisplayProviderProps {
    children: React.ReactNode;
}

export const DisplayProvider: React.FC<DisplayProviderProps> = ({
    children,
}) => {
    const [grouping, setGrouping] = useState<Grouping>(GROUPING.STATUS);
    const [ordering, setOrdering] = useState<Ordering>(ORDERING.PRIORITY);

    const [, setDisplayLS] = useLocalStorageState(
        { grouping: GROUPING.STATUS, ordering: ORDERING.PRIORITY },
        DISPLAY_KEY
    );

    useEffect(() => {
        setGrouping(grouping);
    }, [grouping, ordering, setDisplayLS]);

    return (
        <DisplayContext.Provider
            value={{ grouping, setGrouping, ordering, setOrdering }}
        >
            {children}
        </DisplayContext.Provider>
    );
};
