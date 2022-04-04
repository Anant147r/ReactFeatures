import React from "react";
import Person from "./PersonWithoutObject";
const WithoutObject = () => {
  return (
    <div className="withoutObjects">
      <Person
        name="Anant Rawat"
        age={26}
        email="anantsdf"
        isMarried={false}
        children={[]}
      />
      <Person
        name="Cool dude"
        age={24}
        email="anantsdf"
        isMarried={true}
        children={["Child 1", "Child 2"]}
      />
      <Person
        name="Person 3"
        age={29}
        email="person2sdf"
        isMarried={false}
        children={[]}
      />
      <Person
        name="Anant Rawat"
        age={26}
        email="anantsdf"
        isMarried={false}
        children={[]}
      />
    </div>
  );
};

export default WithoutObject;
