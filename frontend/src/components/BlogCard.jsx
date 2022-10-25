import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'


const BlogCard = ({ data }) => {

    const getAuthorsdata = (id) => {
        console.log(id)
    }

    return (
        <SimpleGrid columns={[1, 2, 3, 3]} gap={5} w={["90%", "80%"]} m="auto" p={5}>
            {data?.map((el, i) => {
                return <Box key={el._id}>
                    <Box>
                        <Box>
                            <Image h={"170px"} w="100%" src={el.image} />
                        </Box>
                        <Box maxH={"205px"} overflowY="hidden">
                            <Text fontSize={"xl"} fontWeight="bold">{el.title}</Text>
                            <Text>{el.content}</Text>
                        </Box>
                        <Flex justify={"space-between"} mt={3}>
                            <Badge colorScheme="orange" borderRadius="20px" p={1}>{el.created_at.split("T")[0]}</Badge>
                            <Badge onClick={(() => getAuthorsdata(el.userId._id))} colorScheme="orange" borderRadius="20px" p={1}>author : {el.userId.name}</Badge>
                        </Flex>

                        <Button colorScheme="teal" display="block" m="auto" mt={3}>Read More</Button>
                    </Box>
                </Box>
            })}
        </SimpleGrid >
    )
}

export default BlogCard
