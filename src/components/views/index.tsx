import { useGrouping, useOrdering, useTickets } from "../../hooks";
import { sortTicketsByOrdering } from "../../contexts";
import { GROUPING, ORDERING } from "../../utils/constants";
import { StatusView } from "./StatusView";
import { PriorityView } from "./PriorityView";
import { UserView } from "./UserView";

export const TicketsView = () => {
    const { grouping } = useGrouping();
    const { tickets } = useTickets();
    const { ordering } = useOrdering();

    const sortedTickets = ordering.length
        ? sortTicketsByOrdering(tickets, ordering || ORDERING.STATUS)
        : tickets;

    return (
        <>
            {GROUPING.STATUS === grouping && (
                <StatusView tickets={sortedTickets} />
            )}
            {GROUPING.PRIORITY === grouping && (
                <PriorityView tickets={sortedTickets} />
            )}
            {GROUPING.USER === grouping && <UserView tickets={sortedTickets} />}
        </>
    );
};
