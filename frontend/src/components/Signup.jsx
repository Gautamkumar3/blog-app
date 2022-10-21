import React, { useState } from 'react'
import { Formik, Field } from "formik";
import axios from "axios"
import {
    Box,
    Flex,
    FormLabel,
    Input,
    Image
} from "@chakra-ui/react";

const Signup = () => {

    const [formData, setFormdata] = useState({ name: "", email: "", password: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/users/signup", formData).then((res) => {
            console.log(res.data)
            alert("Done")
        })
        console.log(formData)
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
