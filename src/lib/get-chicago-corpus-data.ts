import { CHART_COLORS } from "@/lib/colors";
import { chicagoCorpusSchema } from "@/lib/definitions";
import { z } from "zod";

export default async function getChicagoCorpusData(count: number = 500) {
  let data = [];
  let traces = [];

  try {
    const response = await fetch(
      `https://ecv6naufv4qh2pxbb7hotm72n40qhpyd.lambda-url.us-east-1.on.aws/?count=${count}`
    );
    const json = await response.json();

    const schemaArr = z.array(chicagoCorpusSchema);
    const chicagoCorpusData = schemaArr.safeParse(json);

    if (chicagoCorpusData.success) {
      data = chicagoCorpusData.data;
    } else {
      return Promise.reject(chicagoCorpusData.error.errors);
    }

    const trace1 = {
      ids: data.map((item) => item.row),
      x: data.map((item) => item.vector[0]),
      y: data.map((item) => item.vector[1]),
      z: data.map((item) => item.vector[2]),
      mode: "markers",
      marker: {
        color: CHART_COLORS.purple,
        size: 12,
        line: {
          color: "rgba(217, 217, 217, 0.14)",
          width: 0.5,
        },
        opacity: 0.8,
      },
      type: "scatter3d",
      text: data.map((item) => item.data.article_title),
      hoverinfo: "text",
    } as Plotly.Data;

    traces = [trace1];
  } catch (error) {
    console.error("Error fetching work data", error);
    return Promise.reject(error);
  }

  return {
    data,
    traces,
  };
}
