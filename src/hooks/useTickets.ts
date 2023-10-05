import { useContext } from "react";
import { ApiDataContext } from "../contexts";

export const useTickets = () => {
    const { tickets, setTickets } = useContext(ApiDataContext);
    return { tickets, setTickets };
};
