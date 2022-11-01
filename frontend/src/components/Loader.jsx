import { Flex } from '@chakra-ui/react'
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Flex justify={"center"} align="center" h={"100vh"}>
            <RotatingLines
                strokeColor="green"
                strokeWidth="3"
                animationDuration="1"
                width="150"
                visible={true}
            />
        </Flex>
    )
}

export default Loader
