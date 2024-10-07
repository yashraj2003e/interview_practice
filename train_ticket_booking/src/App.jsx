import { useEffect, useState } from "react";
import { rawTrainData } from "./constants.js";
console.log(rawTrainData);
function App() {
  const [date, setDate] = useState("");
  const [data, setData] = useState();
  const [displaySeats, setDisplaySeats] = useState("");

  useEffect(() => {
    const fetchedData = rawTrainData.filter(
      (trainData) => trainData.date === date
    );
    console.log(fetchedData);
    setData(fetchedData);
  }, [date]);

  useEffect(() => console.log(!data), [data]);

  return (
    <div>
      <h1>Train Seat Booking System</h1>
      <span>Select Date</span>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      {date && data?.length === 0 && <h2>No Trains Available !</h2>}
      {data?.length > 0 && (
        <div>
          <h2>Total {data.length} trains available !</h2>
          {data.map((currentTrain) => (
            <div key={currentTrain.trainId}>
              <p>
                <span>
                  {currentTrain.name} - Available Seats :{" "}
                  {currentTrain.availableSeats}
                </span>
                <button
                  style={{ marginLeft: "1rem" }}
                  onClick={() => setDisplaySeats(currentTrain.trainId)}
                >
                  <span>View Seats</span>
                </button>
              </p>
              {displaySeats === currentTrain.trainId &&
                currentTrain.seats.map((seat, idx) => (
                  <button
                    disabled={seat.isBooked === true ? true : false}
                    key={idx}
                    onClick={() => {
                      let newData = [...data];
                      let copiedData = [...data];
                      newData = newData.filter(
                        (curTrain) => curTrain.trainId === currentTrain.trainId
                      );

                      if (newData[0].availableSeats === 0) return;
                      newData[0].availableSeats -= 1;
                      newData[0].seats[idx].isBooked = true;
                      const updatedArray = copiedData.map((currTrain) =>
                        currTrain.trainId === newData[0].trainId
                          ? newData[0]
                          : currTrain
                      );
                      setData(updatedArray);
                    }}
                    style={{
                      margin: "1rem",
                      cursor: `${seat.isBooked ? "not-allowed" : "pointer"}`,
                    }}
                  >
                    {seat.isPWD ? "PWD" : seat.isBooked ? "X" : "F"}
                  </button>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
