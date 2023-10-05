import React from "react";
import { BiPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import "./Views.css";
interface ColumnHeaderProps {
    children: React.ReactNode;
}
export const ColumnHeader: React.FC<ColumnHeaderProps> = ({ children }) => {
    return (
        <div className="column__header">
            {children}
            <div className="column__header-icons">
                <BiPlus /> <BsThreeDots />
            </div>
        </div>
    );
};

interface IconTextProps {
    icon: JSX.Element;
    text: string;
    count: number;
}

export const IconText: React.FC<IconTextProps> = ({ icon, text, count }) => {
    return (
        <div className="column__header-icon-text">
            <span className="column__header-icon" id={`column-icon-${text}`}>
                {icon}
            </span>
            <p className="column__header-icon-text--title">{text}</p>
            <p className="column__header-icon-text--count">{count}</p>
        </div>
    );
};
