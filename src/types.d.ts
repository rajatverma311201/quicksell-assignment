declare module "types" {
    export interface User {
        id: string;
        name: string;
        available: boolean;
    }

    export interface Ticket {
        id: string;
        title: string;
        userId: string;
        status: string;
        priority: Priority;
        tag: Tag[];
    }

    export type Priority = 0 | 1 | 2 | 3 | 4;
    export type Tag = string;

    export type Grouping = "Status" | "User" | "Priority";
    export type Ordering = "Priority" | "Title";

    export type Status =
        | "In progress"
        | "Todo"
        | "Done"
        | "Backlog"
        | "Cancelled";
}
