import React from "react";
import "./Views.css";
import { ColumnHeader, IconText } from "./ColumnHeader";

import { Ticket, type Status } from "types";
import { STATUS_ICON_MAP } from "../../utils/mappings";
import { useUsers } from "../../hooks";
import { Card } from "../card";
import { STATUS_LIST } from "../../utils/constants";

interface StatusViewProps {
    tickets: Ticket[];
}

export const StatusView: React.FC<StatusViewProps> = ({ tickets }) => {
    return (
        <div className="columns">
            {STATUS_LIST.map((stat) => (
                <StatusColumn key={stat} tickets={tickets} status={stat} />
            ))}
        </div>
    );
};

interface StatusColumnProps {
    status: Status;
    tickets: Ticket[];
}

const StatusColumn: React.FC<StatusColumnProps> = ({ status, tickets }) => {
    const { users } = useUsers();
    const ticketsInStatus = tickets.filter(
        (ticket) => ticket.status === status
    );

    return (
        <div className="column">
            <ColumnHeader>
                <IconText
                    icon={STATUS_ICON_MAP[status]}
                    text={status}
                    count={ticketsInStatus.length}
                />
            </ColumnHeader>
            <div className="ticket-cards">
                {ticketsInStatus.map((ticket) => (
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
