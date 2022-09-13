import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { NavLink, Link } from "react-router-dom";
import Step1 from "./Step1";
import MakeBooking from "./MakeBooking";

const BookPlayground = () => {
  const { id } = useParams();
  const [playgrounds, setPlaygrounds] = useState([]);
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);
  const [getHours, setGetHours] = useState([]);
  const [nextScreen, setNextScreen] = useState(false);

  const api = `http://localhost:2004/api/playground/${id}`;
  const { name, description, photo, price, isAvailable } = playgrounds;

  useEffect(() => {
    Axios.get(api)
      .then((res) => {
        // console.log(res.data);
        setPlaygrounds(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get("http://localhost:2004/api/time")
      .then((res) => {
        // if (res.data.playground == id) {
        setGetHours(res.data.data);
        // }
      })
      .catch((e) => console.log(e));
  }, [api]);
  const handleHours = (x) => {
    const time = getHours.find(
      (item) => item.startTime == x.startTime && item.endTime == x.endTime
    );
    if (time) {
      setHours(
        hours.filter(
          (item) => item.startTime != x.startTime && item.endTime != x.endTime
        )
      );
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
          getHours={getHours}
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
