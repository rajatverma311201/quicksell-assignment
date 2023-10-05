import React from "react";
import "./Card.css";

import { STATUS_ICON_MAP } from "../../utils/mappings";
import { useGrouping } from "../../hooks";
import { GROUPING } from "../../utils/constants";

interface CardBodyProps {
    title: string;
    status: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ title, status }) => {
    const { grouping } = useGrouping();

    const titleLength = title.length;
    const titleMaxLength = 50;
    const titleShortened =
        titleLength > titleMaxLength
            ? `${title.slice(0, titleMaxLength)}...`
            : title;
    return (
        <div className="card__body">
            {!(grouping === GROUPING.STATUS) && <Icon status={status} />}
            <p className="card__title">{titleShortened}</p>
        </div>
    );
};

const Icon = ({ status }: { status: string }) => (
    <span className=".card__status-icon-container">
        {STATUS_ICON_MAP[status]}
    </span>
);
