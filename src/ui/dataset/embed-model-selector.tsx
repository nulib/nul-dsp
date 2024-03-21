"use client";

import { Select } from "@radix-ui/themes";

const embeddingModels = [
  {
    label: "BERT",
    value: "BERT",
  },
  {
    label: "Word2Vec",
    value: "Word2Vec",
  },
  {
    label: "GloVe",
    value: "GloVe",
  },
  {
    label: "FastText",
    value: "FastText",
  },
];

export default function EmbedModelSelector() {
  return (
    <div>
      <Select.Root defaultValue="BERT">
        <Select.Trigger />
        <Select.Content>
          {embeddingModels.map((model) => (
            <Select.Item key={model.value} value={model.value}>
              {model.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}
