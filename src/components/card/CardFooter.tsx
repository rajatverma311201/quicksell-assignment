import React from "react";
import { TagView } from "../tag";

import { type Priority, type Tag } from "types";
import { PRIORITY_ICON_MAP } from "../../utils/mappings";
import { useGrouping } from "../../hooks";
import { GROUPING } from "../../utils/constants";
interface CardFooterProps {
    tags: Tag[];
    priority: Priority;
}

export const CardFooter: React.FC<CardFooterProps> = ({ tags, priority }) => {
    const { grouping } = useGrouping();
    return (
        <div className="card__footer">
            {!(grouping === GROUPING.PRIORITY) && (
                <PriorityIcon priority={priority} />
            )}
            {tags.map((tag, index) => (
                <TagView key={index} name={tag} />
            ))}
        </div>
    );
};

interface PriorityIconProps {
    priority: Priority;
}

const PriorityIcon: React.FC<PriorityIconProps> = ({ priority }) => {
    return (
        <span className="card__priority">{PRIORITY_ICON_MAP[priority]}</span>
    );
};
