import { Grouping, Ordering } from "types";

export const GROUPING: { [key: string]: Grouping } = {
    PRIORITY: "Priority",
    STATUS: "Status",
    USER: "User",
};

export const ORDERING: { [key: string]: Ordering } = {
    PRIORITY: "Priority",
    TITLE: "Title",
};

export const GROUPING_LIST = [
    GROUPING.PRIORITY,
    GROUPING.STATUS,
    GROUPING.USER,
];

export const ORDERING_LIST = [ORDERING.PRIORITY, ORDERING.TITLE];

export const DISPLAY_KEY = "DISPLAY";

export const SET_TICKETS = "SET_TICKETS";
export const SET_USERS = "SET_USERS";
export const SET_DATA = "SET_DATA";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
