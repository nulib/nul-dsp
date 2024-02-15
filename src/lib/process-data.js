const processData = async (filePath) => {
  const fs = require("fs");

  if (filePath.endsWith(".tsv")) {
    // Read TSV file using fs.readFileSync and split by tabs
    const dataString = fs.readFileSync(filePath, "utf8");
    const lines = dataString.split("\n");
    const headers = lines[0].split("\t");
    const rows = lines.slice(1).map((line) => line.split("\t"));
    // Process rows data based on your needs (e.g., convert to numbers)
    // ...
    return { labels: headers.slice(1), datasets: yourProcessedData };
  } else if (filePath.endsWith(".ndjson")) {
    // Read NDJSON file line by line and parse JSON objects
    const data = [];
    for await (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
      data.push(JSON.parse(line));
    }
    // Process data objects based on your needs (e.g., extract labels and values)
    // ...
    return { labels: yourLabels, datasets: yourProcessedData };
  } else {
    throw new Error("Unsupported file format");
  }
};
