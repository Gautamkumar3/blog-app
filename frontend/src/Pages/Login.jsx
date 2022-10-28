import React, { useState } from 'react'
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
    useToast,

} from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { BiHide, BiShow } from "react-icons/bi"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../store/auth/Auth.action';

const Login = () => {

    const [data, setData] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const toast = useToast()
    const navigate = useNavigate()
    const loginData = useSelector((store) => store.auth);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(UserLogin(data)).then((res) => {
            if (res) {
                toast({
                    title: 'Login Successful',
                    description: "Your are redirected to home page",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                })
                setTimeout(() => {
                    navigate("/")
                }, 2000);

            } else {
                toast({
                    title: 'Login Failed',
                    description: "Credential is wrong please check your credential",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                })
            }
        })
        setData({ email: "", password: "" })
    }



    return (
        <div>
            <Flex bg="gray.100" justify="center" h="100vh" >
                <Box bg="white" px={5} rounded="md" w={["90%", "30%"]} mt={"5%"} height="fit-content">
                    <Box >
                        <Image w={"200px"} margin="auto" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" />
                    </Box>
                    <Box textAlign={"left"} pb={10}>
                        <form onSubmit={handleSubmit}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='email' name='email' onChange={handleChange} value={data.email} />
                            <FormLabel mt={5}>Password</FormLabel>
                            <Input placeholder='password' name='password' onChange={handleChange} value={data.password} />
                            <Input mt={5} type="submit" value="Login" color={"white"} bg="tomato" w="full" />
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Login
