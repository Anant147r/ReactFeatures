import React, { useEffect } from "react";
const UsingFetch = () => {
  const usingFetch = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const res = response.json();
    return res;
  };
  useEffect(() => {
    usingFetch()
      .then((res) => {
        console.log(res);
        console.log("Fetch Completed");
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>Using Fetch</div>;
};

export default UsingFetch;
