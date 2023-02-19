import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { UserLogout } from "../store/auth/Auth.action";
import logo from "../Images/bglogo.png";

const Navbar = () => {
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  console.log(token.role);

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
    <>
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
        <Flex gap={[2, 4]} align="center">
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
            {token ? `Welcome, ${token.name}` : "Signup"}
          </NavLink>
          <Button
            onClick={() => {
              if (token) {
                handleLogout();
              } else {
                navigate("/login");
              }
            }}
            _hover={{ bg: "lightblue" }}
            variant="outline"
          >
            {token ? "Logout" : "Login"}
          </Button>
          {token.role === "Writer" ? (
            <Button
              colorScheme={"whatsapp"}
              onClick={() => navigate("/create")}
            >
              Create Blog
            </Button>
          ) : (
            ""
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
