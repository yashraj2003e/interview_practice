import { useState } from "react";

const countries = [
  { name: "India", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", cities: ["Dhaka", "Chittagong"] },
];

function App() {
  const [city, setCity] = useState(countries[0].cities);
  return (
    <div>
      <select onChange={(e) => setCity(countries[e.target.value].cities)}>
        {countries.map((country, index) => (
          <option key={index} value={index}>
            {country.name}
          </option>
        ))}
      </select>
      <select>
        {city.map((currentCity, index) => (
          <option key={index}>{currentCity}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
