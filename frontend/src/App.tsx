import { useEffect, useState } from "react";
import "./App.css";
import { Cow } from "./types/cow.type";
import { getCowsFetch } from "./fetches/get-cows";

function App() {
  const [cows, setCows] = useState<Cow[]>([]);

  useEffect(() => {
    getCowsFetch().then(setCows);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Take a Chance' on a Cow</h1>
      </header>
      {cows.map((cow) => (
        <div key={cow.id}>
          <h1>{cow.name}</h1>
          <p>Breed: {cow.weeningWeight}</p>
          <p>Birth Weight: {cow.birthingWeight}</p>
          <p>Ween Weight: {cow.weeningWeight}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
