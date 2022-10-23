import { Badge, Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

let arr = [1, 2, 3, 4, 3, 5, 6, 7, 8, 9, 8]

const BlogCard = () => {
    return (
        <Box w="70%" m="auto">
            {arr.map((el, i) => {
                if (i % 2 === 0) {
                    return <Flex justify="space-between">
                        <Box w="60%" border="5px solid red" textAlign="left" pl={5}>
                            <Heading fontWeight={500}>Heading</Heading>
                            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolorem maiores ullam nisi nesciunt quibusdam temporibus quia iure laborum facilis, esse, voluptatum consectetur assumenda saepe accusantium sequi, illum aspernatur ex.</Text>
                            <Flex>
                            <Badge colorScheme='green'>Date</Badge>
                            </Flex>
                        </Box>
                        <Box w="35%" border="4px solid green" p={5}>
                            <Center>
                                <Image h="150px" src="https://miro.medium.com/fit/c/275/184/1*-yEFU9FdyvuWbbPtLG1kUw.png" />
                            </Center>
                        </Box>
                    </Flex>
                } else {
                    return <Flex my={5} justify="space-between">
                        <Box w="35%" border="4px solid green" p={5}>
                            <Center>
                                <Image h="150px" src="https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70" />
                            </Center>
                        </Box>
                        <Box w="60%" border="5px solid red" >
                            <Heading>content</Heading>
                        </Box>
                    </Flex>
                }
            })}
        </Box>
    )
}

export default BlogCard
