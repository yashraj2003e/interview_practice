import { useEffect, useState } from "react";

function App() {
  const [bookedSeats, setBookedSeats] = useState(0);
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    if (bookedSeats === 5) {
      let seatInfo = "Seats Booked => ";
      let vip = "VIP => ",
        economy = "Economy => ",
        general = "General => ";
      for (let i = 0; i < seats.length; i++) {
        const type = seats[i].typeofSeat;
        const value = seats[i].value;

        let columns = type === 1 ? 6 : type === 2 ? 5 : 8;
        let currentRow = Math.ceil(value / columns);

        let currentColumn = value % columns;

        if (type === 1) {
          vip =
            vip + currentRow.toString() + " " + currentColumn.toString() + " ";
        } else if (type === 2) {
          general =
            general +
            currentRow.toString() +
            " " +
            currentColumn.toString() +
            " ";
        } else {
          economy =
            economy +
            currentRow.toString() +
            " " +
            currentColumn.toString() +
            " ";
        }
      }
      seatInfo = seatInfo + vip + general + economy;
      alert(seatInfo);
    }
  }, [seats, bookedSeats]);

  function handleSeatUpdate(typeofSeat, value) {
    if (
      seats.some(
        (seat) => seat.typeofSeat === typeofSeat && seat.value === value
      )
    ) {
      let newSeat = [...seats];
      newSeat = newSeat.filter(
        (seat) => seat.typeofSeat !== typeofSeat || seat.value !== value
      );
      setSeats(newSeat);
      setBookedSeats((value) => value - 1);
    } else {
      if (bookedSeats === 5) {
        alert("Cannot select more seats ! Maximum of 5 allowed !");
        return;
      }
      seats.push({ typeofSeat, value });
      setBookedSeats((value) => value + 1);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0 2rem",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>VIP Seats 6x6</h1>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(6,1fr)",
            gridTemplateColumns: "repeat(6,1fr)",
            textAlign: "center",
          }}
        >
          {Array.from({ length: 36 }, (_, i) => (
            <button
              key={i}
              style={{ padding: "9px 25px" }}
              onClick={() => handleSeatUpdate(1, i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>General Seats 5x5</h1>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(5,1fr)",
            gridTemplateColumns: "repeat(5,1fr)",
            textAlign: "center",
          }}
        >
          {Array.from({ length: 25 }, (_, i) => (
            <button
              key={i}
              style={{ padding: "9px 25px" }}
              onClick={() => handleSeatUpdate(2, i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Economy Seats 8x8</h1>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(8,1fr)",
            gridTemplateColumns: "repeat(8,1fr)",
            textAlign: "center",
          }}
        >
          {Array.from({ length: 64 }, (_, i) => (
            <button
              key={i}
              style={{ padding: "9px 25px" }}
              onClick={() => handleSeatUpdate(3, i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
