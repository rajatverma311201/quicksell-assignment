import React from "react";
import { TagView } from "../tag";

import { BsFillExclamationSquareFill, BsThreeDots } from "react-icons/bs";
import {
    MdSignalCellularAlt,
    MdSignalCellularAlt1Bar,
    MdSignalCellularAlt2Bar,
} from "react-icons/md";
import { type Priority, type Tag } from "types";
interface CardFooterProps {
    tags: Tag[];
    priority: Priority;
}

export const CardFooter: React.FC<CardFooterProps> = ({ tags, priority }) => {
    return (
        <div className="card__footer">
            <PriorityIcon priority={priority} />
            {tags.map((tag, index) => (
                <TagView key={index} name={tag} />
            ))}
        </div>
    );
};

const priorityMapping = {
    "0": <BsThreeDots />,
    "1": <BsFillExclamationSquareFill />,
    "2": <MdSignalCellularAlt1Bar />,
    "3": <MdSignalCellularAlt2Bar />,
    "4": <MdSignalCellularAlt />,
};

interface PriorityIconProps {
    priority: Priority;
}

const PriorityIcon: React.FC<PriorityIconProps> = ({ priority }) => {
    return <span className="card__priority">{priorityMapping[priority]}</span>;
};
