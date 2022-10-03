import { FC } from "react";
import "./style.css";


interface ICard {
    to: string;
    text: string;
}

const Card: FC<ICard> = ({
    to, text
}) => {

    return (
        <div className="Card">
            <div className="bouttom">
                <p className="paragraph">
                    {text || ""}
                </p>
                <u>
                    Find out here
                </u>
            </div>
        </div>
    );
}

export default Card;