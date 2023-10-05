import { useContext } from "react";
import { ApiDataContext } from "../contexts";

export const useUsers = () => {
    const { users, setUsers } = useContext(ApiDataContext);
    return { users, setUsers };
};
