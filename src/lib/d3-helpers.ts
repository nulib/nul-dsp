type Data = {
  id: string;
  title: string;
  x: number;
  y: number;
};

export function getRangeEndpointValues(data: Data[], targetKey: "x" | "y") {
  let highest = -Infinity;
  let lowest = Infinity;

  for (const obj of data) {
    if (obj[targetKey] > highest) {
      highest = obj[targetKey];
    }
    if (obj[targetKey] < lowest) {
      lowest = obj[targetKey];
    }
  }

  return [lowest, highest];
}
