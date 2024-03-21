import { Container, Grid, Section } from "@radix-ui/themes";

import SingleTrace from "@/ui/charts/3d/single-trace";

export default function DatasetPage() {
  return (
    <Section className="bg-white h-96">
      <Container>
        <Grid columns="3fr 1fr" gap="5">
          <div className="bg-gray-400">
            <SingleTrace />
          </div>
          <div className="bg-gray-400">Buttons</div>
        </Grid>
      </Container>
    </Section>
  );
}
