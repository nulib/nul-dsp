import {
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import ScatterChart from "./ScatterChart";
import { UMAP } from "umap-js";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const UMap = () => {
  // Generate random data
  const data = Array.from({ length: 100 }, () => [
    Math.random(),
    Math.random(),
  ]);

  // Apply UMAP
  const umap = new UMAP();
  const embedding = umap.fit(data);

  // Prepare data for Chart.js
  const datasets = embedding.map((point, i) => ({
    label: `Point ${i}`,
    data: [{ x: point[0], y: point[1] }],
    pointRadius: 3,
    backgroundColor: "rgba(202, 124, 027, 1)",
  }));

  const options = {
    scales: {
      x: {
        display: true,
        title: {
          text: "X-axis",
        },
      },
      y: {
        display: true,
        title: {
          text: "Y-axis",
        },
      },
    },
  };

  const dataDisplay = [
    {
      label: "UMap",
      data: JSON.stringify(umap, null, 2),
    },
    {
      label: "Embedding",
      data: JSON.stringify(embedding, null, 2),
    },
    {
      label: "Chart Data",
      data: JSON.stringify(datasets, null, 2),
    },
  ];

  return (
    <div className="space-y-8">
      <ScatterChart data={{ datasets }} options={options} />

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
        <h3 className="text-xl">Info</h3>
        <h4 className="text-lg">umap object</h4>
        <p>
          A umap object on is an instance of the UMAP algorithm. UMAP stands for
          &quot;Uniform Manifold Approximation and Projection&quot;. It&apos;s a
          mathematical technique used to reduce the complexity of data.
        </p>
        <p>
          UMAP is a dimensionality reduction technique, which means it takes
          data in a high-dimensional space and represents it in a
          lower-dimensional space. In this case, it&apos;s taking the 2D data
          points and representing them in a way that maintains as much of the
          original structure of the data as possible, but in a lower-dimensional
          space.
        </p>

        <h4 className="text-lg">embedding object</h4>
        <p>
          The embedding object is an array of arrays, where each sub-array
          represents a data point in the lower-dimensional space. For example,
          if the original data was in a 100-dimensional space, the embedding
          might represent that data in a 2-dimensional space, which is much
          easier to visualize and work with.
        </p>
      </div>
    </div>
  );
};

export default UMap;
