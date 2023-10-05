import { AiFillCloseCircle, AiOutlineDash } from "react-icons/ai";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbCircleDashed } from "react-icons/tb";

import {
    MdSignalCellularAlt,
    MdSignalCellularAlt1Bar,
    MdSignalCellularAlt2Bar,
} from "react-icons/md";
import { RxHalf2 } from "react-icons/rx";
import { FiCircle } from "react-icons/fi";
export const STATUS_ICON_MAP: { [key: string]: JSX.Element } = {
    Todo: <FiCircle className="card__status-icon icon-todo" />,
    "In progress": <RxHalf2 className="card__status-icon icon-progress" />,
    Backlog: <TbCircleDashed className="card__status-icon icon-backlog" />,
    Done: <IoIosCheckmarkCircle className="card__status-icon icon-done" />,
    Cancelled: (
        <AiFillCloseCircle className="card__status-icon icon-cancelled" />
    ),
};

export const PRIORITY_ICON_MAP = {
    "0": <AiOutlineDash />,
    "4": <BsFillExclamationSquareFill />,
    "1": <MdSignalCellularAlt1Bar />,
    "2": <MdSignalCellularAlt2Bar />,
    "3": <MdSignalCellularAlt />,
};

export const PRIORITY_TEXT_MAP = {
    0: "No priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
};
