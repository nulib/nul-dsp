import { Box, Container, Grid, Heading, Section } from "@radix-ui/themes";

import Link from "next/link";
import { mockDatasets } from "@/lib/get-dataset";

function LinkBox({ name }: { name: string }) {
  return (
    <Box
      p="9"
      style={{
        backgroundColor: "var(--gray-10)",
        color: "white",
      }}
    >
      <Heading size="4">{name}</Heading>
    </Box>
  );
}

export default function DataSetAllPage() {
  return (
    <Section>
      <Container>
        <Box pb="5">
          <Heading>All Datasets</Heading>
        </Box>
        <Grid columns="3" gap="5">
          {mockDatasets.map(({ id, name }) => (
            <Link key={id} href={`/datasets/${id}`}>
              <LinkBox name={name} />
            </Link>
          ))}

          <Link href={`/charts/3d`}>
            <LinkBox name="Searchable" />
          </Link>

          <Link href={`/charts/3d`}>
            <LinkBox name="Interactive" />
          </Link>

          <Link href={`/charts/2d`}>
            <LinkBox name="2d Scatterplot with D3.js" />
          </Link>
        </Grid>
      </Container>
    </Section>
  );
}
