import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

const panels = [
  {
    heading: "Get Started",
    subheading: "Create a Project",
    buttons: [
      { label: "Use My Datasets", href: "/" },
      { label: "Explore Open Datasets", href: "/" },
      { label: "Explore NU Datasets", href: "/" },
    ],
  },
  {
    heading: "Pair Me Up",
    subheading: "Collaborate with Library Specialists",
    buttons: [{ label: "Connect", href: "/" }],
  },
  {
    heading: "Show Me",
    subheading: "Guides and Tutorials",
  },
];

export default function Home() {
  return (
    <Container>
      <Section
        style={{ backgroundColor: "var(--gray-4" }}
        width="100%"
        mt="8"
      ></Section>
      <Section width="100%" pb="0">
        <Grid columns="3" gap="5">
          {panels.map(({ heading, subheading, buttons }) => (
            <Flex
              key={heading}
              direction="column"
              justify="center"
              align="center"
              p="8"
              grow="1"
              style={{
                backgroundColor: "var(--gray-10)",
                color: "white",
              }}
            >
              <Heading>{heading}</Heading>
              <Text>{subheading}</Text>

              {buttons && (
                <Grid gap="3" pt="5">
                  {buttons.map(({ label }) => (
                    <Button key={label}>{label}</Button>
                  ))}
                </Grid>
              )}
            </Flex>
          ))}
        </Grid>
      </Section>
      <Section>
        <Flex width="100%" gap="5" direction="column">
          <Heading>Models</Heading>
          <Grid columns="2" rows="2" gap="5">
            {Array.from({ length: 4 }).map((_, i) => (
              <Box
                key={i}
                display="block"
                p="8"
                style={{
                  backgroundColor: "var(--gray-5)",
                }}
              ></Box>
            ))}
          </Grid>
        </Flex>
      </Section>
    </Container>
  );
}
