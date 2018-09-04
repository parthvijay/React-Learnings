import React from "react";

const userOutput = (props) => {
    return <div>
        <p>Hi, my first name is {props.firstName}</p>
        <p onClick={props.changeLastName}>
          Hi, my last name is {props.lastName}
        </p>
      </div>;
};

export default userOutput;