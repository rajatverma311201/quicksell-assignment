import { useContext } from "react";
import { DisplayContext } from "../contexts";

export const useGrouping = () => {
    const { grouping, setGrouping } = useContext(DisplayContext);
    return { grouping, setGrouping };
};
