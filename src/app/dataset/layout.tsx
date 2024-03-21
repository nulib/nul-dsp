import { Container, Flex, Heading, Section } from "@radix-ui/themes";

import EmbedModelSelector from "@/ui/dataset/embed-model-selector";
import ProjectData from "@/ui/dataset/project-data";

export default function DatasetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Section>
        <Heading>[Dynamic Project here]</Heading>
        <Flex width="100%" py="8" justify="between">
          <ProjectData />
          <EmbedModelSelector />
        </Flex>

        {children}
      </Section>
    </Container>
  );
}
