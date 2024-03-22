import { Box, Button, Container, Grid, Heading } from "@radix-ui/themes";

import DatasetButtons from "@/ui/datasets/buttons";
import Plotly3dChart from "@/ui/plotly/chart";
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
      <Box pb="5">
        <Heading size="4">{data?.name}</Heading>
      </Box>

      <Grid columns="3fr 1fr" gap="5">
        <Box
          style={{
            height: "600px",
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {data && <Plotly3dChart traces={data.traces} />}
          </Suspense>
        </Box>
        <DatasetButtons />
      </Grid>
    </Container>
  );
}
