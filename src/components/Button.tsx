import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton
      bg="pink.600"
      color="gray.50"
      fontSize="xl"
      _hover={{
        bgColor: "pink.400",
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
