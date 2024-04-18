import "./App.css";
import { Accordion } from "./components/Accordion/Accordion.tsx";

function App() {
  return (
    <>
      <h1>React Accordion</h1>
      <div className="card">
        <Accordion title={"Toggle"}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
            voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
            sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
            doloribus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
            voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
            sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
            doloribus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
            voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
            sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
            doloribus?
          </p>
        </Accordion>
      </div>
    </>
  );
}

export default App;
