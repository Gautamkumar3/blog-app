import { UserSignup } from "../store/auth/Auth.action";

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import {
//   Box,
//   Flex,
//   FormLabel,
//   Input,
//   Image,
//   useToast,
//   Select,
// } from "@chakra-ui/react";
// import { Navigate, useNavigate } from "react-router-dom";
// import logo from "../Images/blog_logo.PNG";

// const Signup = () => {
//   const [formData, setFormdata] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const dispatch = useDispatch();
//   const toast = useToast();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormdata({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(UserSignup(formData)).then((res) => {
//       if (res.type === "auth/signup/error") {
//         toast({
//           title: "Signup Failed",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//       } else {
//         toast({
//           title: "Account created.",
//           description: "We've created your account for you.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//         setTimeout(() => {
//           navigate("/login");
//         }, 2000);
//       }
//     });
//   };

//   return (
//     <div>
//       <Flex bg="gray.100" justify="center" my={10}>
//         <Box bg="white" p={5} rounded="md" w={["90%", "35%"]} mt={"8%"}>
//           <Image borderRadius={"10px"} w={"200px"} margin="auto" src={logo} />
//           <Box textAlign={"left"} p={10}>
//             <form onSubmit={handleSubmit}>
//               <FormLabel>Name</FormLabel>
//               <Input
//                 placeholder="name"
//                 name="name"
//                 type={"text"}
//                 onChange={handleChange}
//               />
//               <FormLabel>Email</FormLabel>
//               <Input
//                 placeholder="email"
//                 name="email"
//                 type={"email"}
//                 onChange={handleChange}
//               />
//               <FormLabel mt={2}>Password</FormLabel>
//               <Input
//                 placeholder="password"
//                 name="password"
//                 type={"password"}
//                 onChange={handleChange}
//               />
//               <FormLabel mt={2}>Role</FormLabel>
//               <Select
//                 variant="filled"
//                 placeholder="Select your role"
//                 name="role"
//                 onChange={handleChange}
//               >
//                 <option value="User">User</option>
//                 <option value="Writer">Writer</option>
//               </Select>
//               <Input
//                 mt={2}
//                 type="submit"
//                 value="Signup"
//                 color={"white"}
//                 bg="tomato"
//                 w="full"
//               />
//             </form>
//           </Box>
//         </Box>
//       </Flex>
//     </div>
//   );
// };

// export default Signup;

import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
  Select,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { BiHide, BiShow } from "react-icons/bi";

const Signup = ({ title }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <Flex bg="gray.100" justify="center" my={"5%"}>
      <Box
        bg="white"
        px={5}
        rounded="md"
        mt={["10%", "8%", "5%"]}
        w={["80%", "50%", "40%", "30%"]}
        height="fit-content"
      >
        <Box my={10}>
          <Image borderRadius={"10px"} w={"200px"} margin="auto" src={logo} />
        </Box>
        <Box textAlign={"left"} pb={10}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              role: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              dispatch(
                UserSignup({
                  name: values.name,
                  email: values.email,
                  password: values.password,
                  role: values.role,
                })
              ).then((res) => {
                console.log(res);
                if (res.type === "auth/signup/error") {
                  toast({
                    title: "Signup Failed",
                    description: res.msg,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                  });
                } else {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                  });
                  setTimeout(() => {
                    navigate("/login");
                  }, 2000);
                }
              });
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={3} align="flex-start">
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      type="text"
                      bg="white"
                      color="black"
                      variant="outline"
                      size="lg"
                      border="2.5px solid black"
                      validate={(value) => {
                        let error;
                        if (!value) {
                          error = "Required";
                        }
                        return error;
                      }}
                    />

                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
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
                          if (!value) {
                            error = "Required";
                          } else if (value.length < 7) {
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
                  <FormControl isInvalid={!!errors.role && touched.role}>
                    <FormLabel htmlFor="role">role</FormLabel>
                    <Field
                      as={Select}
                      id="role"
                      name="role"
                      placeholder="Select your role"
                      type="text"
                      bg="white"
                      color="black"
                      variant="outline"
                      size="lg"
                      border="2.5px solid black"
                      validate={(value) => {
                        let error;
                        if (!value) {
                          error = "Required";
                        }
                        return error;
                      }}
                    >
                      <option value="User">User</option>
                      <option value="Writer">Writer</option>
                    </Field>

                    <FormErrorMessage>{errors.role}</FormErrorMessage>
                  </FormControl>
                  <Button
                    h="48px"
                    mt={9}
                    type="submit"
                    color={"#fff"}
                    bg="#604d9e"
                    width="full"
                    borderRadius="10px"
                    _hover={{ bg: "#640090" }}
                  >
                    Signup
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

export default Signup;
