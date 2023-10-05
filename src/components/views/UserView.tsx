import React from "react";
import "./Views.css";
import { ColumnHeader, IconText } from "./ColumnHeader";

import { Ticket, User } from "types";

import { useUsers } from "../../hooks";
import { Card } from "../card";
import { Avatar } from "../avatar";

interface UserViewProps {
    tickets: Ticket[];
}

export const UserView: React.FC<UserViewProps> = ({ tickets }) => {
    const { users } = useUsers();

    return (
        <div className="columns">
            {users.map((user) => (
                <PriorityColumn key={user.id} tickets={tickets} user={user} />
            ))}
        </div>
    );
};

interface PriorityColumnProps {
    user: User;
    tickets: Ticket[];
}

const PriorityColumn: React.FC<PriorityColumnProps> = ({ user, tickets }) => {
    const { users } = useUsers();
    const ticketsInPriority = tickets.filter(
        (ticket) => ticket.userId === user.id
    );

    return (
        <div className="column">
            <ColumnHeader>
                <IconText
                    icon={
                        <Avatar name={user.name} available={user.available} />
                    }
                    text={user.name}
                    count={ticketsInPriority.length}
                />
            </ColumnHeader>
            <div className="ticket-cards">
                {ticketsInPriority.map((ticket) => (
                    <Card
                        key={ticket.id}
                        ticket={ticket}
                        user={users.find((item) => item.id === ticket.userId)!}
                    />
                ))}
            </div>
        </div>
    );
};
