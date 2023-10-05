import "./Avatar.css";

interface AvatarProps {
    available: boolean;
}

export function Avatar({ available }: AvatarProps) {
    console.log("Avatar.tsx: AvatarProps: available: ", available);

    return (
        <div className="avatar">
            <span className="avatar__img"></span>

            {available ? (
                <span className="avatar__status avatar__status--on"></span>
            ) : (
                <span className="avatar__status avatar__status--off"></span>
            )}
        </div>
    );
}
