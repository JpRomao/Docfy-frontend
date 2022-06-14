import {
  Flex,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, type, name, ...rest }) => {
  return (
    <Flex>
      {label && <label htmlFor={name}>{label}: </label>}
      <ChakraInput type={type} name={name} {...rest} />
    </Flex>
  );
};
