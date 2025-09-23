import React, { Suspense, useEffect } from "react";
import User from "./User";

function ApiCall() {
  const fetchDataFunc = () => {
    return fetch("https://dummyjson.com/users").then((result) => result.json());
  };
  let fetchResponse = fetchDataFunc();
  return (
    <div>
      <h1>'Use' API in React 19</h1>
      <Suspense fallback={<p>Loading API Data.....</p>}>
        <User fetchResponse={fetchResponse} />
      </Suspense>
    </div>
  );
}

export default ApiCall;
