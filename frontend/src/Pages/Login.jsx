import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../store/auth/Auth.action";
import logo from "../Images/blog_logo.PNG";

import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Text,
  InputGroup,
  InputRightElement,
  Center,
  Image,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { BiHide, BiShow } from "react-icons/bi";

const Login = ({ title }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <Flex bg="gray.100" justify="center" h="100vh" my={"5%"}>
      <Box
        bg="white"
        px={5}
        rounded="md"
        w={["90%", "30%"]}
        mt={"5%"}
        height="fit-content"
      >
        <Box my={10}>
          <Image borderRadius={"10px"} w={"200px"} margin="auto" src={logo} />
        </Box>
        <Box textAlign={"left"} pb={10}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              dispatch(
                UserLogin({ email: values.email, password: values.password })
              ).then((res) => {
                if (res?.data?.msg === "Login successfull") {
                  toast({
                    title: "Login Successful",
                    description: "Your are redirected to home page",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                  });
                  setTimeout(() => {
                    navigate("/");
                  }, 2000);
                } else {
                  toast({
                    title: "Login Failed",
                    description:
                      "Credential is wrong please check your credential",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                  });
                }
              });
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      bg="white"
                      color="black"
                      variant="outline"
                      size="lg"
                      border="2.5px solid black"
                      validate={(value) => {
                        let error;
                        if (!value) {
                          error = "Required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                            value
                          )
                        ) {
                          error = "Invalid email address";
                        }
                        return error;
                      }}
                    />

                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type={show ? "text" : "password"}
                        size="lg"
                        bg="white"
                        color="black"
                        border="2.5px solid black"
                        validate={(value) => {
                          let error;

                          if (value.length < 7) {
                            error =
                              "Password must contain at least 8 characters";
                          }

                          return error;
                        }}
                      />
                      <InputRightElement width="4.5rem">
                        <Center
                          fontSize="30px"
                          pt={2}
                          bg="none"
                          onClick={handleClick}
                        >
                          {show ? (
                            <BiHide color="black" />
                          ) : (
                            <BiShow color="black" bg="black" />
                          )}
                        </Center>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Button
                    h="48px"
                    mt={5}
                    type="submit"
                    color={"#fff"}
                    bg="#604d9e"
                    width="full"
                    borderRadius="10px"
                    _hover={{ bg: "#640090" }}
                  >
                    Login{" "}
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
