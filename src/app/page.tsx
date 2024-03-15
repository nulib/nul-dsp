import { Box, Flex, Heading, Link } from "@radix-ui/themes";

const items = [
  {
    title: "3-d Scatterplots",
    description:
      "Demos of test datasets and API fetching using Plotly JS client",
    href: "/charts/3d",
  },
  {
    title: "2-d Scatterplots",
    description: "Demos of test datasets using D3.js",
    href: "/charts/2d",
  },
  {
    title: "Data Science screen flow",
    description: "Mock some screen flows, mimicking Nomic Atlas",
    href: "/flow",
  },
];

export default function Home() {
  return (
    <Flex
      gap="5"
      direction="column"
      justify="center"
      align="center"
      className="h-screen w-full"
    >
      <Heading as="h1">Vector visualizations</Heading>
      {items.map((item) => (
        <Box
          key={item.title}
          className="flex flex-col items-center max-w-md text-center"
        >
          <Link
            href={item.href}
            className="text-xl pb-2 underline hover:no-underline"
          >
            {item.title}
          </Link>
          <p>{item.description}</p>
        </Box>
      ))}
    </Flex>
  );
}
