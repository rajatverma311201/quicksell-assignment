import { Ticket, User } from "types";

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

interface Data {
    tickets: Ticket[];
    users: User[];
}

export const fetchData = async (): Promise<Data> => {
    const res = await fetch(API_URL);

    const data = await res.json();

    if (!res.ok || res.status >= 400) {
        throw new Error(data.message || "Something went wrong");
    }
    return data;
};
