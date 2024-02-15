import {
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import { Scatter } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  zoomPlugin
);

const baselineOptions = {
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
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: "xy",
      },
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "xy",
      },
    },
  },
};

const ScatterChart = ({ data, options = {} }) => {
  const chartOptions = { ...baselineOptions, ...options };
  return <Scatter data={data} options={chartOptions} />;
};

export default ScatterChart;
