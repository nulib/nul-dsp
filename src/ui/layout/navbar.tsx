import { Box, Container, Flex, Link } from "@radix-ui/themes";

const navItems = [
  { label: "Projects", href: "/" },
  { label: "Data Sets", href: "/" },
  { label: "Contact", href: "/" },
];

export default function NavBar() {
  return (
    <Box
      p="5"
      style={{
        borderBottom: `1px solid var(--gray-a3)`,
      }}
    >
      <Container>
        <Flex asChild justify="between">
          <nav>
            <Box>
              <Link href="/">logo</Link>
            </Box>
            <Flex gap="6">
              {navItems.map((item) => (
                <Link href={item.href} key={item.label}>
                  {item.label}
                </Link>
              ))}
            </Flex>
          </nav>
        </Flex>
      </Container>
    </Box>
  );
}
