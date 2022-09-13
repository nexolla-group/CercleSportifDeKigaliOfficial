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
  const [nextScreen, setNextScreen] = useState(false);
  const [selectedHours, setSelectedHours] = useState([]);
  const [availableHours, setAvailableHours] = useState([]);

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
        setAvailableHours(res.data.data);
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
        />
      )}
    </>
  );
};

export default BookPlayground;
