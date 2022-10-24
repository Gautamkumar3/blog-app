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

} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { BiHide, BiShow } from "react-icons/bi"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../store/auth/Auth.action';

const Login = () => {

    const [data, setData] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(UserLogin(data))
    }



    return (
        <div>
            <Flex bg="gray.100" justify="center" h="100vh" >
                <Box bg="white" px={5} rounded="md" w="30%" mt={"5%"} height="fit-content">
                    <Box >
                        <Image w={"200px"} margin="auto" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" />
                    </Box>
                    <Box textAlign={"left"} pb={10}>
                        <form onSubmit={handleSubmit}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='email' name='email' onChange={handleChange} />
                            <FormLabel mt={5}>Password</FormLabel>
                            <Input placeholder='password' name='password' onChange={handleChange} />
                            <Input mt={5} type="submit" value="Login" color={"white"} bg="tomato" w="full" />
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Login
