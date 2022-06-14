import { Flex, Heading } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import Head from "next/head";

import { Button } from "../components/Button";

export default function Home() {
  return (
    <>
      <Head key="home">
        <title>Docfy | Home</title>
      </Head>

      <Flex
        alignItems="center"
        justifyContent="center"
        w="100%"
        direction="column"
      >
        <Heading as="h1" fontSize="6xl">
          Docfy
        </Heading>

        <Heading as="h4" fontWeight="normal" fontSize="lg" mt="4">
          Create your documents here
        </Heading>

        <Flex w="100%" alignItems="center" justifyContent="center" my="12">
          <NextImage width={560} height={340} src="/hero2.gif" alt="imagem" />
        </Flex>

        <Button>
          <NextLink href="./document/create">Start now</NextLink>
        </Button>
      </Flex>
    </>
  );
}
