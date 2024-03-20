import { Box, Container, Flex, Link } from "@radix-ui/themes";

const navItems = [
  { label: "Log In", href: "/" },
  { label: "Welcome, Ralph", href: "/" },
  { label: "3-d Charts", href: "/charts/3d" },
  { label: "2-d Charts", href: "/charts/2d" },
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
              <Link href="/" data-testid="logo">
                logo
              </Link>
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
