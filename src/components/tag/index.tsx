import React from "react";
import "./Tag.css";

interface TagProps {
    name: string;
}

export function TagView({ name }: TagProps) {
    return (
        <div className="tag">
            <span /> {name}
        </div>
    );
}
