import React from "react";

const validation = (props) => {
    const isTextLong = props.textLength;
    if (isTextLong > 5) {
        return <p>Text is long enough. {props.textLength}</p>;
    } else {
        return <p>Text is too short. {props.textLength}</p>;
    }
}

export default validation;