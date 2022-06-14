import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { Dropbox } from "../../../components/Dropbox";
import { Button } from "../../../components/Button";

export interface DocumentProps {
  file: File;
  fileBase64: string;
}

export default function CreateDocument() {
  const [document, setDocument] = useState({} as DocumentProps);

  return (
    <>
      <Head key="create">
        <title>Docfy | Create</title>
      </Head>

      <Flex as="section" flex="1" direction="column" alignItems="center">
        <Dropbox document={document} setDocument={setDocument} />

        <Flex w="100%" justifyContent="flex-end" mt="4" pe="10%">
          <Button>Next</Button>
        </Flex>
      </Flex>
    </>
  );
}
