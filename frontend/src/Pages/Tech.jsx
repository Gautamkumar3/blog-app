import { Box } from "@chakra-ui/react";
import BlogCategory from "./BlogCategory";

const Tech = () => {
  return (
    <Box>
      <BlogCategory
        url="https://media.istockphoto.com/id/1395428816/photo/group-of-young-people-in-technical-vocational-training-with-teacher.jpg?b=1&s=170667a&w=0&k=20&c=3yXn9XH0757VfqOa0VM_ozhAh4GWppH1382ApkT4t7c="
        category={"tech"}
      />
    </Box>
  );
};

export default Tech;
