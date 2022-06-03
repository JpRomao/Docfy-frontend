import {
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { Button } from "./Button";

interface MenuInterface {
  options: {
    label: string;
    href: string;
  }[];
}

export const Menu: React.FC<MenuInterface> = ({ options }) => {
  return (
    <ChakraMenu>
      <MenuButton as={Button}>Actions</MenuButton>

      <MenuList bg="gray.900">
        {options.map((option) => (
          <MenuItem _hover={{ color: "gray.800" }}>
            <NextLink href={option.href}>{option.label}</NextLink>
          </MenuItem>
        ))}
      </MenuList>
    </ChakraMenu>
  );
};
