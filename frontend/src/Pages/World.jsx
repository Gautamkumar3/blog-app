import { Box } from '@chakra-ui/react'
import React from 'react'
import BlogCategory from './BlogCategory';

const World = () => {
  return (
    <Box>
      <BlogCategory
        url="https://images.unsplash.com/photo-1518316847866-651fbb917956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        category={"world"}
      />
    </Box>
  );
}

export default World
