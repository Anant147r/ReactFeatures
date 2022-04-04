import React from "react";
import Person from "./PersonWithObject";
const WithoutObject = () => {
  const objectArr = [
    {
      name: "Anant Rawat",
      age: 26,
      email: "anantsdf",
      isMarried: false,
      children: [],
    },
    {
      name: "Cool dude",
      age: 24,
      email: "anantsdf",
      isMarried: true,
      children: ["Child 1", "Child 2"],
    },
    {
      name: "Anant Rawat",
      age: 26,
      email: "anantsdf",
      isMarried: false,
      children: ["CHild 2", "child 4"],
    },
    {
      name: "Anant Rawat",
      age: 26,
      email: "anantsdf",
      isMarried: false,
      children: [],
    },
  ];
  return (
    <div className="withoutObjects">
      {objectArr.map((person, index) => (
        <Person key={index} properties={person} />
      ))}
    </div>
  );
};

export default WithoutObject;
