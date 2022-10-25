import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from "axios"
import {
    Box,
    Flex,
    FormLabel,
    Input,
    Image,
    useToast
} from "@chakra-ui/react";
import { UserSignup } from '../store/auth/Auth.action';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [formData, setFormdata] = useState({ name: "", email: "", password: "" });
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(UserSignup(formData))
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top"
        })
        setTimeout(() => {
            navigate("/login")
        }, 2000)

    }

    return (
        <div>
            <Flex bg="gray.100" justify="center" >
                <Box bg="white" px={5} rounded="md" w={["90%", "30%"]} mt={"5%"} height="fit-content">
                    <Box >
                        <Image w={"200px"} margin="auto" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" />
                    </Box>
                    <Box textAlign={"left"} pb={10}>
                        <form onSubmit={handleSubmit}>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder='name' name='name' onChange={handleChange} />
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='email' name='email' onChange={handleChange} />
                            <FormLabel mt={5}>Password</FormLabel>
                            <Input placeholder='password' name='password' onChange={handleChange} />

                            <select name="role" onChange={handleChange}>
                                <option value="User">User</option>
                                <option value="Writer">Writer</option>
                            </select>
                            <Input mt={5} type="submit" value="Signup" color={"white"} bg="tomato" w="full" />
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Signup;
