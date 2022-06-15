import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/cars")
      .then(data => data.json())
      .then(data => setCars(data));
  }, []);

  return (
    <div className="App">
      This is the car list which is coming from the backend test:
      <div className="car-list">
        {cars.map(car => {
          return (
            <div>
              <b>{car.name}</b>, color: {car.color}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
