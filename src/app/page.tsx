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
      <Section className="bg-gray-200" width="100%" height="8"></Section>
      <Section width="100%" pb="0">
        <Grid columns="3" gap="5" className="h-72">
          {panels.map(({ heading, subheading, buttons }) => (
            <Flex
              key={heading}
              direction="column"
              justify="center"
              align="center"
              p="6"
              grow="1"
              className="bg-gray-600 text-white"
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
        <Heading className="pb-5">Models</Heading>
        <Grid columns="2" rows="2" gap="3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Box key={i} className="bg-gray-400 h-36"></Box>
          ))}
        </Grid>
      </Section>
    </Container>
  );
}
