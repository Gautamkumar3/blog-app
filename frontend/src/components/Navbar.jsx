import { Avatar, Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Flex justifyContent="space-between" fontSize="xl" h={"80px"} align="center" bg="#604d9e" p={5} color="white">
                <NavLink to="/" >GK</NavLink>
                <Flex gap={5}>
                    <NavLink to="/signup"  >SignUp </NavLink>
                    <NavLink to="/login"  >Login </NavLink>
                    <Avatar size='sm' name='Segun Adebayo' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
                </Flex>
            </Flex>

        </>

    )
}

export default Navbar