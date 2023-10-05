import React from "react";
import "./Card.css";

import { FaCircleHalfStroke, FaRegCircle } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbCircleDashed } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";

interface CardBodyProps {
    title: string;
    status: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ title, status }) => {
    const titleLength = title.length;
    const titleMaxLength = 50;
    const titleShortened =
        titleLength > titleMaxLength
            ? `${title.slice(0, titleMaxLength)}...`
            : title;

    return (
        <div className="card__body">
            <Icon status={status} />
            <p className="card__title">{titleShortened}</p>
        </div>
    );
};

const statusMap: { [key: string]: JSX.Element } = {
    Todo: <FaRegCircle className="card__status-icon icon-todo" />,
    "In progress": (
        <FaCircleHalfStroke className="card__status-icon icon-progress" />
    ),
    Backlog: <TbCircleDashed className="card__status-icon icon-backlog" />,
    Done: <IoIosCheckmarkCircle className="card__status-icon icon-done" />,
    Cancelled: (
        <AiFillCloseCircle className="card__status-icon icon-cancelled" />
    ),
};

const Icon = ({ status }: { status: string }) => (
    <span className=".card__status-icon-container">{statusMap[status]}</span>
);
