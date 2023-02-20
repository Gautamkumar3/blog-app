import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/bglogo.png";
import NavDrawer from "./NavDrawer";
import Styles from "./navbar.module.css";

const MobileNav = () => {
  return (
    <div className={Styles.mob_nav}>
      <Flex
        justifyContent="space-between"
        fontSize="xl"
        h={"80px"}
        align="center"
        bg="#604d9e"
        p={[2, 5]}
        color="white"
        pos={"fixed"}
        top="0px"
        w="full"
        zIndex="5"
      >
        <NavLink to="/">
          <Image src={logo} h="70px" />
        </NavLink>
        <NavDrawer />
      </Flex>
    </div>
  );
};

export default MobileNav;
