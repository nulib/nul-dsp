import { Box, Container, Heading, Section } from "@radix-ui/themes";

import Interactive from "@/ui/charts/3d/interactive";
import Search from "@/ui/charts/3d/search";

export default function ThreeDPage() {
  return (
    <>
      <Section>
        <Container>
          <Box pb="5">
            <Heading as="h2">Search NUL Data</Heading>
          </Box>
          <Search />
        </Container>
      </Section>

      <Section>
        <Container>
          <Box pb="5">
            <Heading as="h2">Interact with Data</Heading>
          </Box>
          <Interactive />
        </Container>
      </Section>
    </>
  );
}
