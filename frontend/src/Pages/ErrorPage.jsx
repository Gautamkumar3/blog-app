import { Box, Button, Center, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import error from "../Images/error.png";

const ErrorPage = () => {
  return (
    <Box display={["block", "flex"]} gap={14} mt={"6%"} align="center">
      <Image h={["60vh","90vh"]} src={error} />
      <Center>
        <Box>
          <Heading fontSize={"100px"}>404</Heading>
          <Heading>Page not found</Heading>
          <Link to={"/"}>
            <Button my={5} colorScheme="whatsapp">
              Go back to Home Page
            </Button>
          </Link>
        </Box>
      </Center>
    </Box>
  );
};

export default ErrorPage;
