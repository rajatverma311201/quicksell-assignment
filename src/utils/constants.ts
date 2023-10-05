import { Grouping, Ordering, Status } from "types";

export const GROUPING: { [key: string]: Grouping } = {
    STATUS: "Status",
    PRIORITY: "Priority",
    USER: "User",
};

export const ORDERING: { [key: string]: Ordering } = {
    PRIORITY: "Priority",
    TITLE: "Title",
};

export const GROUPING_LIST: Grouping[] = [
    GROUPING.STATUS,
    GROUPING.PRIORITY,
    GROUPING.USER,
];

export const ORDERING_LIST: Ordering[] = [ORDERING.PRIORITY, ORDERING.TITLE];

export const STATUS_LIST: Status[] = [
    "Backlog",
    "Todo",
    "In progress",
    "Done",
    "Cancelled",
];

export const DISPLAY_KEY = "DISPLAY";

export const SET_TICKETS = "SET_TICKETS";
export const SET_USERS = "SET_USERS";
export const SET_DATA = "SET_DATA";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const AVATAR_COLORS = [
    "orangered",
    "orange",
    "darkgreen",
    "steelblue",
    "purple",
];
