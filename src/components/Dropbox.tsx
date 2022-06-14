import { Flex, Text } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import { transformFileInBase64 } from "../utils/transformInBase64";
import { DocumentProps } from "../pages/document/create";

interface DropboxProps {
  document: DocumentProps;
  setDocument: (document: DocumentProps) => void;
}

export const Dropbox: React.FC<DropboxProps> = ({ document, setDocument }) => {
  const {
    getRootProps,
    getInputProps,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [],
      ".pdf": [],
    },
    onDrop: async (acceptedFile) => {
      const fileBase64 = await transformFileInBase64(acceptedFile[0]);

      setDocument({
        file: acceptedFile[0],
        fileBase64,
      });
    },
    noClick: true,
    noKeyboard: true,
  });

  return (
    <Flex
      {...getRootProps({ isDragAccept, isFocused, isDragReject })}
      border="1px solid"
      cursor="pointer"
      onClick={open}
      direction="column"
      p={document.file ? "5%" : "20%"}
      w="100%"
      h="100%"
      align="center"
      justifyContent="center"
    >
      <input {...getInputProps()} />

      {!document.file && (
        <Text fontSize="3xl">Drag 'n' drop some file here</Text>
      )}

      {document.file && (
        <Flex
          w="100%"
          h="100%"
          mt="4"
          key={document.file.name}
          direction="column"
          align="center"
        >
          {(document.file.type.split("/")[0] === "image" ||
            document.file.type === "application/pdf") && (
            <Image src={document.fileBase64} height={600} width={800} />
          )}

          <Text mt="4">{document.file.name}</Text>
        </Flex>
      )}
    </Flex>
  );
};
