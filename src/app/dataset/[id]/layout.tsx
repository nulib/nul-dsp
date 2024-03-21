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
        <Flex
          width="100%"
          py="6"
          mb="6"
          justify="between"
          style={{
            borderBottom: `1px solid var(--gray-3)`,
          }}
        >
          <ProjectData />
          <EmbedModelSelector />
        </Flex>
      </Container>
      {children}
    </Section>
  );
}
