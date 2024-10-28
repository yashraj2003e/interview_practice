import { useEffect, useState } from "react";

let gifts = [
  "Sweets Box",
  "Dry Fruits",
  "Decorative Diyas",
  "Candles",
  "Silver Coin",
  "Flower Pot",
  "Gift Hamper",
  "Chocolate Box",
  "Traditional Lantern",
  "Puja Thali",
];

function App() {
  const [guests, setGuests] = useState([]);
  const [name, setName] = useState("");

  function handleAdd() {
    let newGuests = [...guests, { id: crypto.randomUUID(), name, gift: "" }];
    setGuests(newGuests);
    setName("");
  }

  function handleRemove(guestId) {
    let newGuests = [...guests];
    newGuests = newGuests.filter((guest) => guest.id !== guestId);
    console.log(newGuests);
    setGuests(newGuests);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleShuffle() {
    let indexArr = Array.from({ length: guests.length });
    for (let i = 0; i < indexArr.length; i++) {
      indexArr[i] = i;
    }
    shuffleArray(indexArr);

    let newGuest = guests.map((guest) => ({ ...guest }));

    for (let i = 0; i < guests.length; i++) {
      console.log(indexArr[i]);
      newGuest[i]["gift"] = guests[indexArr[i]]["gift"];
    }

    setGuests(newGuest);
  }

  function assignGifts() {
    let newGuest = [...guests];
    let index = 0;
    for (let i = 0; i < newGuest.length; i++) {
      if (!newGuest[i]["gift"]) {
        newGuest[i]["gift"] = gifts[index];
        index++;
      }
    }
    setGuests(newGuest);
  }

  function reset() {
    let newGuest = [...guests];
    for (let i = 0; i < newGuest.length; i++) {
      newGuest[i]["gift"] = "";
    }
    setGuests(newGuest);
  }

  return (
    <div>
      <h1>Diwali Gift Exchange</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => handleAdd()}>Add Person</button>
      {guests.map((guest) => (
        <div style={{ display: "flex" }} key={guest.id}>
          <p>{guest.name} -</p>
          <p>{guest.gift ? guest.gift : "Not gifts assigned"}</p>
          <button onClick={() => handleRemove(guest.id)}>Remove</button>
        </div>
      ))}
      <div style={{ display: "flex" }}>
        <button onClick={assignGifts}>Assign Gifts</button>
        <button onClick={handleShuffle}>Shuffle Gifts</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
