import React from "react";
import "./Card.css";

interface CardHeaderProps {
    children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
    return <p className="card__header-id">{children}</p>;
};
