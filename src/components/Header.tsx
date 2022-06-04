import { Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { Menu } from "./Menu";

const Header: React.FC = () => {
  // function handleToggleTheme() {
  //   const theme = selectedTheme === "light" ? "dark" : "light";

  //   localStorage.setItem("docfy-theme", theme);
  // }

  return (
    <Flex
      as="header"
      color="gray.50"
      bgColor="gray.900"
      px="10%"
      py="5"
      alignItems="center"
      justifyContent="space-between"
    >
      <NextLink href={"/"}>
        <Heading>
          <Link>LOGO</Link>
        </Heading>
      </NextLink>

      <Flex justifyContent="space-between" position="relative">
        <Menu
          options={[
            {
              label: "Inbox",
              href: "/inbox",
            },
            {
              label: "New document",
              href: "/document/create",
            },
            {
              label: "My documents",
              href: "/document/list",
            },
          ]}
        />

        {/* <Switch ms="5"></Switch> */}
      </Flex>
    </Flex>
  );
};

export { Header };
