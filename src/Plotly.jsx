import ScatterChart from "./ScatterChart";
import textAndVectorData from "./data/vectors_tsne_2d_reduced.json";

const NulData = () => {
  const data = {
    labels: [],
    vectors: [],
  };
  for (const item of textAndVectorData) {
    data.vectors.push({
      x: item.x,
      y: item.y,
    });
    data.labels.push(item.title);
  }

  const chartData = {
    labels: data.labels, // Create labels for x-axis
    datasets: [
      {
        label: "NUL Digital Collections",
        data: textAndVectorData,
        pointRadius: 3,
        backgroundColor: "rgba(000, 127, 164, 1)",
      },
    ],
  };

  const dataDisplay = [
    {
      label: "TSNE 2D Reduced Data",
      data: JSON.stringify(textAndVectorData, null, 2),
    },
  ];

  const options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          console.log("data", data);
          // Get the data point value
          var value =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          console.log("value", value);
          // Return a string that contains HTML tags
          return "<b>X: </b>" + value.x + "<br><b>Y: </b>" + value.y;
        },
      },
    },
  };

  return (
    <div className="space-y-8">
      <ScatterChart data={chartData} options={options} />

      <div className="grid gap-5 grid-col1 md:grid-cols-1">
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
          This is showing a sample of the whole index data. <pre>x, y</pre>{" "}
          values have been added to the data which represent the 2D dimension.
        </p>
      </div>
    </div>
  );
};

export default NulData;
