import { AVATAR_COLORS } from "./constants";

export const getInitials = (name: string) => {
    const words = name.split(/\s+/);

    let initials = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            initials += word[0].toUpperCase();
        }
    }

    return initials;
};

export const getAvatarColor = (name: string) => {
    const initials = getInitials(name);
    const charCode = initials.charCodeAt(0);
    const colorIndex = charCode % AVATAR_COLORS.length;
    return AVATAR_COLORS[colorIndex];
};
