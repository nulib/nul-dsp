export function getRangeEndpointValues(data: any[], targetKey: string) {
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
