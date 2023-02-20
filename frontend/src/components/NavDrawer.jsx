import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Flex,
  Avatar,
  useToast,
  Text,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserLogout } from "../store/auth/Auth.action";

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLogout = () => {
    dispatch(UserLogout());
    toast({
      title: "Logout successfull",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <Box>
      <HamburgerIcon
        w={10}
        h={10}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="full"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Box>
              <Flex justify={"space-around"}>
                <HStack>
                  {token ? (
                    <Avatar
                      size="sm"
                      name={token.name}
                      src="https://bit.ly/broken-link"
                    />
                  ) : (
                    ""
                  )}
                  <NavLink to="/signup">
                    <Text fontSize={"30px"} fontWeight="bold">
                      {" "}
                      {token ? `Welcome, ${token.name}` : "Signup"}
                    </Text>
                  </NavLink>
                </HStack>
                <Button
                  onClick={() => {
                    if (token) {
                      handleLogout();
                    } else {
                      navigate("/login");
                    }
                    onClose();
                  }}
                  _hover={{ bg: "lightblue" }}
                  colorScheme={"red"}
                >
                  {token ? "Logout" : "Login"}
                </Button>
              </Flex>
            </Box>
            <Flex ml={"10%"} mt={5}>
              <Box fontSize={"25px"}>
                <Box my={2}>
                  <NavLink
                    onClick={onClose}
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "#000",
                      borderBottom: isActive ? "3px solid red" : "",
                    })}
                    to={"/tech"}
                  >
                    Tech
                  </NavLink>
                </Box>
                <Box my={2}>
                  <NavLink
                    onClick={onClose}
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "#000",
                      borderBottom: isActive ? "3px solid red" : "",
                    })}
                    to={"/entertainment"}
                  >
                    Entertainment
                  </NavLink>
                </Box>
                <Box my={2}>
                  {" "}
                  <NavLink
                    onClick={onClose}
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "#000",
                      borderBottom: isActive ? "3px solid red" : "",
                    })}
                    to={"/lifestyle"}
                  >
                    Lifestyle
                  </NavLink>
                </Box>
                <Box my={2}>
                  <NavLink
                    onClick={onClose}
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "#000",
                      borderBottom: isActive ? "3px solid red" : "",
                    })}
                    to={"/world"}
                  >
                    World
                  </NavLink>
                </Box>
                <Box my={2}>
                  <NavLink
                    onClick={onClose}
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "#000",
                      borderBottom: isActive ? "3px solid red" : "",
                    })}
                    to={"/business"}
                  >
                    Business
                  </NavLink>
                </Box>
              </Box>
            </Flex>
            <Flex justify={"center"} mt="10%">
              {token.role === "Writer" ? (
                <Button
                  colorScheme={"whatsapp"}
                  onClick={() => {
                    navigate("/create");
                    onClose();
                  }}
                >
                  Create Blog
                </Button>
              ) : (
                ""
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
