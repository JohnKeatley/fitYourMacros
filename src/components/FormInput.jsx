import React from "react";

export default function FormInput(props) {
  console.log(props.value);
  return (
    <>
      <h2>{props.name}</h2>
      <input
        onChange={(e) =>
          props.callback({
            ...props.value,
            [props.name.toLowerCase()]: e.target.value
          })
        }
      />
    </>
  );
}
