import { Box } from '@chakra-ui/react'
import React from 'react'
import BlogCategory from './BlogCategory';

const LifeStyle = () => {
  return (
    <Box>
      <BlogCategory
        url="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpZmVTdHlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        category={"lifestyle"}
      />
    </Box>
  );
}

export default LifeStyle
