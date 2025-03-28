import React from "react";
import { useAppContext } from "./App";

const Person = (props) => {
  const value = useAppContext();
  const { clearItem } = value;

  const { name, age, image, id } = props;
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      <button className="btn" onClick={() => clearItem(id)}>
        Remove
      </button>
    </article>
  );
};

export default Person;
