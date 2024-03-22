import { Box, Container, Heading, Section } from "@radix-ui/themes";

import Simple from "@/ui/charts/2d/simple";

export default function TwoDPage() {
  return (
    <>
      <Section>
        <Container>
          <Box pb="5">
            <Heading as="h2">2d Scatterplot with D3.js</Heading>
          </Box>
          <Simple />
        </Container>
      </Section>
    </>
  );
}
