import * as tf from "@tensorflow/tfjs";

import ScatterChart from "./ScatterChart";

const TensorFlow = () => {
  // Generate random data
  const data = tf.randomNormal([100, 20]);

  // Convert tensor to array
  const dataSyncData = data.dataSync();
  const arraySyncData = data.arraySync();

  const chartData = {
    labels: [...Array(100).keys()], // Create labels for x-axis
    datasets: [
      {
        label: "tf.randomeNormal() data",
        data: arraySyncData,
        pointRadius: 3,
        backgroundColor: "rgba(000, 127, 164, 1)",
      },
    ],
  };

  const dataDisplay = [
    {
      label: "Tensor",
      data: JSON.stringify(data, null, 2),
    },
    {
      label: "dataSync Array",
      data: JSON.stringify(dataSyncData, null, 2),
    },
    {
      label: "arraySync Array",
      data: JSON.stringify(arraySyncData, null, 2),
    },
  ];

  return (
    <div className="space-y-8">
      <ScatterChart data={chartData} />

      <div className="grid gap-5 grid-col1 md:grid-cols-3">
        {dataDisplay.map((item, index) => (
          <div key={index}>
            <h3 className="mb-4 text-xl">{item.label}</h3>
            <div className="w-full p-5 overflow-auto bg-gray-100 border h-96">
              <pre>{item.data}</pre>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-5 text-gray-600">
        <h3 className="mb-4 text-xl">Info</h3>
        <p>
          A tensor is a generalization of vectors and matrices to potentially
          higher dimensions. Internally, TensorFlow represents tensors as
          n-dimensional arrays of base datatypes.
        </p>

        <p>
          When you see the word tensor, think of a multidimensional array. For
          example:
        </p>

        <ul className="list-disc">
          <li>
            A scalar (a single number) can be represented as a 0-D Tensor.
          </li>{" "}
          <li>
            A vector (a list of numbers) can be represented as a 1-D Tensor.
          </li>{" "}
          <li>
            A matrix (a 2-dimensional grid of numbers) can be represented as a
            2-D Tensor.
          </li>{" "}
        </ul>
        <p>And so on for higher dimensions.</p>
        <p>
          In many machine learning models, especially deep learning models,
          tensors are used as the primary data structure to hold and manipulate
          data.
        </p>
      </div>
    </div>
  );
};

export default TensorFlow;
