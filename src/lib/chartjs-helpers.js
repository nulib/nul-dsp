export const baselineOptions = {
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
