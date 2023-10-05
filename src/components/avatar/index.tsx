import { getAvatarColor, getInitials } from "../../utils/helpers";
import "./Avatar.css";

interface AvatarProps {
    available: boolean;
    name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ available, name }) => {
    const initials = getInitials(name);
    const avatarColor = getAvatarColor(name);
    return (
        <div className="avatar">
            <span
                className="avatar__img"
                style={{ backgroundColor: avatarColor }}
            >
                {initials}
            </span>

            {available ? (
                <span className="avatar__status avatar__status--on"></span>
            ) : (
                <span className="avatar__status avatar__status--off"></span>
            )}
        </div>
    );
};
