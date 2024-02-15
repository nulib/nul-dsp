import "./App.css";

import NulData from "./NulData";
import TensorFlow from "./TensorFlow";
import UMap from "./UMap";

const displays = [
  {
    label: "NUL Data",
    component: <NulData />,
  },
  {
    label: "TensorFlow",
    component: <TensorFlow />,
  },
  {
    label: "UMap",
    component: <UMap />,
  },
];

function App() {
  return (
    <div className="h-screen p-10 font-mono bg-gray-50">
      <h1 className="mb-10 text-2xl text-center">Vector visualizations</h1>
      <div className="container mx-auto ">
        <div className="space-y-20 text-left">
          {displays.map((display, index) => (
            <section key={index} className="p-10 bg-white shadow">
              <h2 className="mb-10 text-2xl">{display.label}</h2>
              {display.component}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
