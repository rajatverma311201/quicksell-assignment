import React from "react";
import "./Views.css";
import { ColumnHeader, IconText } from "./ColumnHeader";
import { Priority, Ticket } from "types";
import { PRIORITY_ICON_MAP, PRIORITY_TEXT_MAP } from "../../utils/mappings";
import { useUsers } from "../../hooks";
import { Card } from "../card";

interface PriorityViewProps {
    tickets: Ticket[];
}

export const PriorityView: React.FC<PriorityViewProps> = ({ tickets }) => {
    const PRIORITY_LIST: Priority[] = [0, 4, 3, 2, 1];

    return (
        <div className="columns">
            {PRIORITY_LIST.map((prior) => (
                <PriorityColumn
                    key={prior}
                    tickets={tickets}
                    priority={prior}
                />
            ))}
        </div>
    );
};

interface PriorityColumnProps {
    priority: Priority;
    tickets: Ticket[];
}

const PriorityColumn: React.FC<PriorityColumnProps> = ({
    priority,
    tickets,
}) => {
    const { users } = useUsers();
    const ticketsInPriority = tickets.filter(
        (ticket) => ticket.priority === priority
    );

    return (
        <div className="column">
            <ColumnHeader>
                <IconText
                    icon={PRIORITY_ICON_MAP[priority]}
                    text={PRIORITY_TEXT_MAP[priority]}
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
