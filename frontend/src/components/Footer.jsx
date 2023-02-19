import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Images/bglogo.png";

const Footer = () => {
  return (
    <Box bg={"#604d9e"} p={2}>
      <Flex justify={"center"} align="center">
        <Text color={"#fff"}>
          Designed & Build by Gautam Kumar, 2022 All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
