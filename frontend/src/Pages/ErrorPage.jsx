import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import error from "../Images/error.png";

const ErrorPage = () => {
  return (
    <Flex gap={14} mt={"6%"} align="center">
      <Image h={"90vh"} src={error} />
      <Box>
        <Heading fontSize={"100px"}>404</Heading>
        <Heading>Page not found</Heading>
        <Link to={"/"}>
          <Button my={5} colorScheme="whatsapp">Go back to Home Page</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default ErrorPage;
