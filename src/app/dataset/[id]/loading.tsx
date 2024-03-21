import { Flex, Text } from "@radix-ui/themes";

export default function Loading() {
  return (
    <Flex
      width="100%"
      align="center"
      justify="center"
      style={{
        height: "300px",
        backgroundColor: "var(--gray-2)",
      }}
    >
      <Text>Loading...</Text>
    </Flex>
  );
}
