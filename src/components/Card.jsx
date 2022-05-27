import Item from "./Item";
import React, { useState, useEffect } from "react";

const Card = (props) => {
  const [data, setData] = useState({ records: [] });

  useEffect(() => {
    fetch(
      "https://api.harvardartmuseums.org/object?apikey=1a247669-161a-41b6-9fc1-08ca82573915"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.records.map((item, index) => {
        return (
          <Item
            img={item.images}
            key={index}
            title={item.title}
            medium={item.medium}
          />
        );
      })}
    </div>
  );
};

export default Card;
