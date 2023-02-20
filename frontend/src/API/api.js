import axios from "axios";

export const getAllBlog = async (page = 1, limit = 12) => {
  let res = await axios.get(
    `https://backend-deploy-render-production-c99e.up.railway.app/posts/all?page=${page}&&limit=${limit}`
  );

  return res;
};
