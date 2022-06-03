import { Box, Flex } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

interface AddedUser {
  name: string;
  avatar?: string;
  email: string;
}

export const PeopleAdded: React.FC<AddedUser> = ({ avatar, name, email }) => {
  return (
    <Flex alignItems="center">
      <AiOutlineUser size={24} />

      <Flex direction="column" ms="4">
        <Box>{name}</Box>

        <Box>{email}</Box>
      </Flex>
    </Flex>
  );
};
