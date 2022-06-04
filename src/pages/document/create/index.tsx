import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function CreateDocument() {
  const [files, setFiles] = useState([]);

  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "image/*": [],
      ".pdf": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} />
      </div>
    </div>
  ));

  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Flex>
      <Box {...getRootProps({ className: "dropzone" })}></Box>
    </Flex>
  );
}
