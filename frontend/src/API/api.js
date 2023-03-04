import axios from "axios";

export const getAllBlog = async (page = 1, limit = 12) => {
  let res = await axios.get(
    `https://blog-app-backend-t5f0.onrender.com/posts/all?page=${page}&&limit=${limit}`
  );

  return res;
};
