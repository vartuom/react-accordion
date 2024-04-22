import "./App.css";
import { AccordionRAF } from "./components/AccordionRAF/AccordionRAF.tsx";
import { AccordionScrollHeight } from "./components/AccordionScrollHeight/AccordionScrollHeight.tsx";

function App() {
  return (
    <>
      <h1>React Accordion</h1>
      <div className="card">
        <AccordionRAF
          title={"Accordion with useLayoutEffect and requestAnimationFrame()"}
        >
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
        </AccordionRAF>
      </div>
      <div className="card">
        <AccordionScrollHeight title={"Accordion with element.scrollHeight"}>
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
        </AccordionScrollHeight>
      </div>
    </>
  );
}

export default App;
