import { Container, Flex, Heading, Section } from "@radix-ui/themes";

import EmbedModelSelector from "@/ui/dataset/embed-model-selector";
import ProjectData from "@/ui/dataset/project-data";

export default function DatasetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section>
      <Container>
        <Heading>[Dynamic Project here]</Heading>
        <Flex width="100%" py="8" justify="between">
          <ProjectData />
          <EmbedModelSelector />
        </Flex>
      </Container>

      {children}
    </Section>
  );
}
