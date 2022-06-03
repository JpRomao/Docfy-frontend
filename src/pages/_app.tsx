import { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Flex px="15%" mt="4">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
