import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Flex justifyContent="space-evenly">
                <NavLink to="/"  >Blogs </NavLink>
                <NavLink to="/signup"  >SignUp </NavLink>
                <NavLink to="/login"  >Login </NavLink>



            </Flex>
        </>

    )
}

export default Navbar