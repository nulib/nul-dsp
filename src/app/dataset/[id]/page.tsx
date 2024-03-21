import { Box, Container, Grid, Heading } from "@radix-ui/themes";

import Chart from "@/ui/plotly/chart";
import { Suspense } from "react";
import { getDataset } from "@/lib/get-dataset";

type DatasetPageProps = {
  params: { id: string };
};

export default async function DatasetPage({
  params: { id },
}: DatasetPageProps) {
  const data = await getDataset(id);

  return (
    <Container>
      <Heading size="4">{data?.name}</Heading>
      <Grid columns="3fr 1fr" gap="5">
        <Box
          style={{
            height: "600px",
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {data && <Chart traces={data.traces} />}
          </Suspense>
        </Box>
        <div>Buttons</div>
      </Grid>
    </Container>
  );
}
