import { Box, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Inbox() {
  return (
    <>
      <Head key="inbox">
        <title>Docfy | Create</title>
      </Head>

      <Flex>
        <Heading>Caixa de entrada</Heading>

        <Flex border="1px solid"></Flex>
      </Flex>
    </>
  );
}
