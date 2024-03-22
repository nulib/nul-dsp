"use client";

import { Box, Button, Flex } from "@radix-ui/themes";

const buttons = [
  {
    label: "Ask a question",
    onClick: () => {
      console.log("Ask a question");
    },
  },
  {
    label: "Launch notebook",
    onClick: () => {
      console.log("Launch notebook");
    },
  },
  {
    label: "Search and filter",
    onClick: () => {
      console.log("Search and filter");
    },
  },
];

export default function DatasetButtons() {
  return (
    <Flex direction="column" width="100%" gap="5">
      {buttons.map(({ label, onClick }) => (
        <Button key={label} size="3" variant="surface" onClick={onClick}>
          {label}
        </Button>
      ))}
    </Flex>
  );
}
