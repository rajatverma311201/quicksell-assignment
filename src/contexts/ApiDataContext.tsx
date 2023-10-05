import { createContext, useReducer } from "react";
import { Ticket, User } from "types";
import {
    SET_DATA,
    SET_ERROR,
    SET_LOADING,
    SET_TICKETS,
    SET_USERS,
} from "../utils/constants";

interface ApiDataCtx {
    tickets: Ticket[];
    setTickets: (tickets: Ticket[]) => void;
    users: User[];
    setUsers: (users: User[]) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
    setData: ({ tickets, users }: { tickets: Ticket[]; users: User[] }) => void;
}

export const ApiDataContext = createContext<ApiDataCtx>({
    tickets: [],
    users: [],
    loading: false,
    error: null,
    setTickets: (tickets: Ticket[]) => {},
    setUsers: (users: User[]) => {},
    setLoading: (loading: boolean) => {},
    setError: (error: string | null) => {},
    setData: ({ tickets, users }: { tickets: Ticket[]; users: User[] }) => {},
});

interface ApiDataProviderProps {
    children: React.ReactNode;
}

export const ApiDataProvider: React.FC<ApiDataProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, {
        tickets: [],
        users: [],
        loading: false,
        error: null,
    });

    const setTickets = (tickets: Ticket[]) => {
        dispatch(setTicketsAct(tickets));
    };

    const setUsers = (users: User[]) => {
        dispatch(setUsersAct(users));
    };

    const setLoading = (loading: boolean) => {
        dispatch(setLoadingAct(loading));
    };

    const setError = (error: string | null) => {
        dispatch(setErrorAct(error));
    };

    const setData = ({
        tickets,
        users,
    }: {
        tickets: Ticket[];
        users: User[];
    }) => {
        dispatch(setDataAct({ tickets, users }));
    };

    const { tickets, users, loading, error } = state;

    const val = {
        tickets,
        setTickets,
        users,
        setUsers,
        loading,
        setLoading,
        error,
        setError,
        setData,
    };

    return (
        <ApiDataContext.Provider value={val}>
            {children}
        </ApiDataContext.Provider>
    );
};

const reducer = (state: ApiDataCtx, action: any) => {
    switch (action.type) {
        case SET_TICKETS:
            return { ...state, tickets: action.payload };
        case SET_USERS:
            return { ...state, users: action.payload };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        case SET_ERROR:
            return { ...state, error: action.payload };
        case SET_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

const setTicketsAct = (tickets: Ticket[]) => ({
    type: SET_TICKETS,
    payload: tickets,
});

const setUsersAct = (users: User[]) => ({
    type: SET_USERS,
    payload: users,
});

const setLoadingAct = (loading: boolean) => ({
    type: SET_LOADING,
    payload: loading,
});

const setErrorAct = (error: string | null) => ({
    type: SET_ERROR,
    payload: error,
});

const setDataAct = ({
    tickets,
    users,
}: {
    tickets: Ticket[];
    users: User[];
}) => ({
    type: SET_DATA,
    payload: { tickets, users },
});
