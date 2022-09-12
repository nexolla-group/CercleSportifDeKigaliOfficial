import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import Step1 from "./Step1";
import MakeBooking from "./MakeBooking";

const choices = [
  {
    hours: "08:00-09:00",
  },
  {
    hours: "09:00-10:00",
  },
  {
    hours: "10:00-11:00",
  },
  {
    hours: "11:00-12:00",
  },
  {
    hours: "12:00-01:00",
  },
  {
    hours: "01:00-02:00",
  },
  {
    hours: "02:00-03:00",
  },
];
const BookPlayground = () => {
  const { id } = useParams();
  const [playgrounds, setPlaygrounds] = useState([]);
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);
  const [getHours, setGetHours] = useState([]);
  const [nextScreen, setNextScreen] = useState(false);
  const [fromHours, setFromHours] = useState([]);
  const [toHours, setToHours] = useState([]);

  const api = `http://localhost:2004/api/playground/${id}`;
  const { name, description, photo, price, isAvailable } = playgrounds;
  useEffect(() => {
    Axios.get(api)
      .then((res) => {
        setPlaygrounds(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get("http://localhost:2004/api/time")
      .then((res) => {
        setGetHours(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleHours = (x) => {
    const time = hours.find((item) => item == x);
    if (time) {
      setHours(hours.filter((item) => item != x));
    } else {
      setHours([...hours, x]);
    }
  };

  return (
    <>
      {nextScreen ? (
        <MakeBooking setNextScreen={setNextScreen} hours={hours} date={date} />
      ) : (
        <Step1
          hours={hours}
          handleHours={handleHours}
          choices={choices}
          playgrounds={playgrounds}
          setPlaygrounds={setPlaygrounds}
          setNextScreen={setNextScreen}
          setDate={setDate}
          date={date}
        />
      )}
    </>
  );
};

export default BookPlayground;
