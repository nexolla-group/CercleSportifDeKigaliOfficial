import React, { useState, useEffect } from "react";
import Axios from "axios";

const PlaygroundsAdmin = () => {
  const [playgrounds, setPlaygrounds] = useState([]);
  const api = `http://localhost:2004/api/playGround/`;
  useEffect(() => {
    Axios.get(api)
      .then((res) => {
        console.log(res.data);
        // setPlaygrounds(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [api]);

  return (
    <>
      <div className="container">
        <h1>h</h1>
      </div>
    </>
  );
};
export default PlaygroundsAdmin;
