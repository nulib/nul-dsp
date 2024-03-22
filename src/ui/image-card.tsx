import { Card, Flex, Heading, Inset, Link, Text } from "@radix-ui/themes";

import Image from "next/image";
import { NULWork } from "@/lib/definitions";

export default function ImageCard({
  activeWork,
}: {
  activeWork: Partial<NULWork>;
}) {
  return (
    <Card size="2" style={{ maxWidth: 240 }}>
      <Inset clip="padding-box" side="top" pb="current">
        <Image
          src={activeWork.thumbnail || ""}
          alt="goes here"
          width={200}
          height={140}
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 140,
            backgroundColor: "var(--gray-5)",
          }}
        />
      </Inset>
      <Flex direction="column" gap="2" align="center" justify="center">
        <Heading size="3" as="h3">
          {activeWork.title}
        </Heading>
        <Text as="p" size="2">
          {activeWork.description}
        </Text>
        {activeWork.canonical_link && (
          <Link
            href={activeWork.canonical_link}
            target="_blank"
            rel="noreferrer noopener"
          >
            View Work
          </Link>
        )}
      </Flex>
    </Card>
  );
}
