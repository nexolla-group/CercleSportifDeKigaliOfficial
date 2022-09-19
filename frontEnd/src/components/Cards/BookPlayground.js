import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import Step1 from "./Step1";
import MakeBooking from "./MakeBooking";

const BookPlayground = ({ name }) => {
  const { id } = useParams();
  const [playgrounds, setPlaygrounds] = useState([]);
  const [date, setDate] = useState("");
  const [nextScreen, setNextScreen] = useState(false);
  const [selectedHours, setSelectedHours] = useState([]);
  const [availableHours, setAvailableHours] = useState([]);

  const api = `http://localhost:2004/api/playground/${id}`;
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    Axios.get(api)
      .then((res) => {
        // console.log(res.data);
        setPlaygrounds(res.data.data);
        setTotalPrice(res.data.data.price);
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get("http://localhost:2004/api/time")
      .then((res) => {
        setAvailableHours(
          res.data.data.filter((item) => item.playground == id)
        );
      })
      .catch((e) => console.log(e));
  }, [api]);

  const handleHours = (x) => {
    const time = selectedHours.find(
      (item) => item.startTime == x.startTime && item.endTime == x.endTime
    );
    if (time) {
      setSelectedHours(
        selectedHours.filter(
          (item) => item.startTime !== x.startTime && item.endTime !== x.endTime
        )
      );
    } else {
      setSelectedHours([...selectedHours, x]);
    }
  };

  return (
    <>
      {nextScreen ? (
        <MakeBooking
          setNextScreen={setNextScreen}
          selectedHours={selectedHours}
          date={date}
          totalPrice={totalPrice}
          name={name}
        />
      ) : (
        <Step1
          availableHours={availableHours}
          selectedHours={selectedHours}
          handleHours={handleHours}
          playgrounds={playgrounds}
          setPlaygrounds={setPlaygrounds}
          setNextScreen={setNextScreen}
          setDate={setDate}
          date={date}
          totalPrice={totalPrice}
        />
      )}
    </>
  );
};

export default BookPlayground;
