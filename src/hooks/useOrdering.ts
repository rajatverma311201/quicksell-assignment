import { useContext } from "react";
import { DisplayContext } from "../contexts";

export const useOrdering = () => {
    const { ordering, setOrdering } = useContext(DisplayContext);
    return { ordering, setOrdering };
};
