import { FC } from "react";
import "./style.css";

interface ITitleRed {
    children: any;
}

const TitleRed: FC<ITitleRed> = ({ children }) => {
    return (
        <h2
            className="TitleRed"
        >
            {children || ""}
        </h2>
    );
}

export default TitleRed;