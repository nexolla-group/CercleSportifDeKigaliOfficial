import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Booking from "../../Pages/Booking";

const MakeBooking = ({ setNextScreen, selectedHours, date, totalPrice }) => {
  let { id } = useParams();
  let [playgrounds, setPlaygrounds] = useState([]);

  const totalOfFrancs = totalPrice * selectedHours.length;
  const tax = (totalOfFrancs * 18) / 100;
  const totalCost = totalOfFrancs + tax;
  let { name } = playgrounds;
  let api = `http://localhost:2004/api/playground/`;
  useEffect(() => {
    Axios.get(api)
      .then((res) => {
        // console.log(res.data);
        setPlaygrounds(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [api]);

  const [checking, setChecking] = useState(true);
  const [token, setToken] = useState(null);
  const getToken = async () => {
    const token = await localStorage.getItem("token");
    // console.log("token ", token);
    if (token) {
      setToken(token);
      setChecking(false);
    } else {
      window.location = `/register/#${id}`;
    }
  };
  useEffect(() => {
    getToken();
  }, [token]);

  return (
    <>
      {checking ? null : (
        <>
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col">
                <table border="1" class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">PLAYGROUND</th>
                      <th scope="col">DATE</th>
                      <th scope="col">TIME</th>
                      <th scope="col">PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-success">
                      <td>{name}</td>
                      <td>{date.toString()}</td>
                      <td>
                        <>
                          {selectedHours.map((x, i) => (
                            <p key={i}> {`${x.startTime}-${x.endTime}`}</p>
                          ))}
                        </>
                      </td>
                      <td>
                        {totalOfFrancs} <b>Rwf</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              style={{
                borderBottom: "1px dashed #000",
                borderTop: "1px dashed #000",
              }}
              className="row m-2 p-2"
            >
              <div
                style={{ fontWeight: "bold" }}
                className="col col-6 text-left"
              >
                Background's price:
              </div>
              <div
                style={{ textAlign: "right" }}
                className="col col-6 text-dark"
              >
                {totalOfFrancs} <b>Rwf</b>
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px dashed #000",
              }}
              className="row m-2 p-2"
            >
              <div
                style={{ fontWeight: "bold" }}
                className="col col-6 text-left"
              >
                Tax:
              </div>
              <div
                style={{ textAlign: "right" }}
                className="col col-6 text-dark"
              >
                {tax} <b>Rwf</b>
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px dashed #000",
              }}
              className="row m-2 p-2"
            >
              <div
                style={{ fontWeight: "bold" }}
                className="col col-6 text-left"
              >
                Total Price:
              </div>
              <div
                style={{ textAlign: "right" }}
                className="col col-6 text-dark"
              >
                {totalCost} <b>Rwf</b>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col col-4"></div>
            </div>
            <Booking
              setNextScreen={setNextScreen}
              selectedHours={selectedHours}
              date={date}
              totalOfFrancs={totalOfFrancs}
              tax={tax}
              totalCost={totalCost}
            />
          </div>
        </>
      )}
    </>
  );
};

export default MakeBooking;
