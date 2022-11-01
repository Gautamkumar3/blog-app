import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';


const Home = () => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
    const navigate = useNavigate()



    return (
        <Box pos="relative" mt={"80px"}>
            <Box textAlign="center" position="absolute" top="5%" left="50%" transform="translate(-50%, -50%)">
                <Heading color="white" size={["xl", "xl", "2xl"]} >Welcome to Gk blog</Heading>
                <Button mt={5} p="25px 30px" _hover={{ bgGradient: 'linear(to-r, pink.400,#fba062,)', transform: "scale(1.15)" }} bgGradient='linear(to-r, #fba062, pink.400)'
                    color="white" onClick={() => navigate("/blog")}>Explore now</Button>
            </Box>
            <Box >
                <Image height="400vh" w="100%" src="https://static.wixstatic.com/media/fee50a_8d5c6f21a5d14b919d4be75bd07b5337~mv2_d_3840_12495_s_3_2.jpg/v1/fill/w_1898,h_8653,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/fee50a_8d5c6f21a5d14b919d4be75bd07b5337~mv2_d_3840_12495_s_3_2.jpg" />
            </Box>
            {/* ################### Left Box ###################  */}
            <Box pos="absolute" top="24%" left="4%" w="40%" bgGradient='linear(to-r, #fba062, pink.400)' color={"white"} fontSize="20px" borderRadius="30px" boxShadow='lg' p="20px">
                <Text>Blogging is a great way to show your talents and interests to prospective employers, while adding an edge to your resume. If you blog consistently it shows your dedication, passions and creativity – all of which are key attributes employers look for in job candidates.  <span style={{ color: "blue" }}>~Lauren Conrad</span> </Text>
            </Box>
            <Box pos="absolute" top="42%" right="1%" w="50%" bg={"gray.200"} borderRadius="30px" boxShadow='lg' p="20px">
                <Heading size={["xl", "2xl", "3xl"]}>Create your own blog</Heading>
                <Button display="block" margin="auto" transform="scale(1.25)" mt={[5, 7, 8]} _hover={{ bgGradient: 'linear(to-r, pink.400,#fba062,)', transform: "scale(1.5)" }} bgGradient='linear(to-r, #fba062, pink.400)'
                    color="white" onClick={() => navigate("/create")}>Click here</Button>
            </Box>
            <Box pos="absolute" top="56%" left="1%" w="50%" bgGradient='linear(to-r, #fba062, pink.400)' color={"white"} borderRadius="30px" boxShadow='lg' p="20px">
                <Text fontSize="20px">Conversation is king. Content is just something to talk about. </Text>
                <Text textAlign="right" color={"blue"}>~Cory Doctorow </Text>
                <Text fontSize="20px">The first step in blogging is not writing them but reading them.</Text>
                <Text textAlign="right" color={"blue"} mr={5}>~Jeff Jarvis</Text>
            </Box>
            <Box pos="absolute" top="71%" right="4%" w="40%" bg={"gray.200"} borderRadius="30px" boxShadow='lg' p="20px">
                <Heading size={["xl", "2xl", "3xl"]}>Read free blogs </Heading>
                <Button display="block" margin="auto" transform="scale(1.25)" mt={[5, 7, 8]} _hover={{ bgGradient: 'linear(to-r, pink.400,#fba062,)', transform: "scale(1.5)" }} bgGradient='linear(to-r, #fba062, pink.400)'
                    color="white" onClick={() => navigate("/blog")}>Click here</Button>
            </Box>
        </Box>
    )
}

export default Home;







