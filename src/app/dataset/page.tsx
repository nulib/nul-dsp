import { Box, Container, Grid, Heading, Section } from "@radix-ui/themes";

import Link from "next/link";
import { mockDatasets } from "@/lib/get-dataset";

export default function DataSetAllPage() {
  return (
    <Section>
      <Container>
        <Box pb="5">
          <Heading>All Datasets</Heading>
        </Box>
        <Grid columns="3" gap="5">
          {mockDatasets.map(({ id, name }) => (
            <Link key={id} href={`/dataset/${id}`}>
              <Box
                p="9"
                style={{
                  backgroundColor: "var(--gray-10)",
                  color: "white",
                }}
              >
                <Heading size="4">{name}</Heading>
              </Box>
            </Link>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
