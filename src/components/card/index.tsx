import { Ticket, User } from "types";
import "./Card.css";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { Avatar } from "../avatar";
import { useGrouping } from "../../hooks";
import { GROUPING } from "../../utils/constants";

interface CardProps {
    ticket: Ticket;
    user: User;
}
export const Card: React.FC<CardProps> = ({ ticket, user }) => {
    const { grouping } = useGrouping();
    return (
        <div className="card">
            <div className="card-content">
                <p className="card__header-id">{ticket.id}</p>
                <CardBody title={ticket.title} status={ticket.status} />
                <CardFooter tags={ticket.tag} priority={ticket.priority} />
            </div>
            {!(grouping === GROUPING.USER) && (
                <Avatar name={user.name} available={user.available} />
            )}
        </div>
    );
};
