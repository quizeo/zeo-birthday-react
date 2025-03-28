import React from "react";
import Person from "./Person";

const List = (props) => {
  return (
    <div>
      {props.people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

export default List;
