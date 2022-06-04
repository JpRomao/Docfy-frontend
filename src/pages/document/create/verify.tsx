import { Flex, Grid, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

import { Button } from "../../../components/Button";
import { PeopleAdded } from "../../../components/PeopleAdded";

export default function NewDocument() {
  return (
    <Flex direction="column" w="100%">
      <Heading>Add people to your document</Heading>

      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows={"1fr"}
        border="1px solid"
        borderRadius="8"
        mt="8"
        rowGap={8}
        p="4"
      >
        <Flex align="center" ps="2">
          <PeopleAdded name="João Pedro" email="ojpzinho@gmail.com" />
        </Flex>

        <Flex align="center" ps="2">
          Oie
        </Flex>

        <Flex align="center" ps="2">
          Oie
        </Flex>

        <Flex align="center" ps="2">
          <PeopleAdded name="João Pedro" email="ojpzinho@gmail.com" />
        </Flex>

        <Flex align="center" ps="2">
          Oie
        </Flex>

        <Flex align="center" ps="2">
          Oie
        </Flex>

        <Flex align="center" ps="2">
          <PeopleAdded name="João Pedro" email="ojpzinho@gmail.com" />
        </Flex>

        <Flex align="center" ps="2">
          Oie
        </Flex>

        <Flex align="center" ps="2">
          Oie
        </Flex>
      </Grid>

      <Flex align="center" justifyContent="flex-end" mt="4">
        <Button>
          <NextLink href="./verify">Next</NextLink>
        </Button>
      </Flex>
    </Flex>
  );
}
