import React, { useEffect } from "react";
import PropsTypes from "prop-types";
const Person = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div
      className="person"
      style={{
        border: "1px solid black",
        maxWidth: "15rem",

        margin: "0 auto",
        marginBottom: "1rem",
      }}
    >
      <h3>{props.properties.name}</h3>
      <h3>{props.properties.age}</h3>
      <h3>{props.properties.email}</h3>
      <h3>{props.properties.isMarried}</h3>
      <h3>Children :</h3>
      <ul>
        {props.properties.children.map((child, key) => {
          return <li key={key}>{child}</li>;
        })}
      </ul>
    </div>
  );
};

Person.propTypes = {
  properties: PropsTypes.shape({
    name: PropsTypes.string,
    age: PropsTypes.number,
    email: PropsTypes.string,
    isMarried: PropsTypes.bool,
    children: PropsTypes.arrayOf(PropsTypes.string),
  }),
};
export default Person;
