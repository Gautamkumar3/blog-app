import axios from "axios";

export const getAllBlog = async (page = 1, limit = 12) => {
  // let res = await axios.get(
  //   `https://backend-deploy-render.onrender.com/posts/all?page=${page}&&limit=${limit}`
  // );
  let res = await axios.get(
    `https://backend-deploy-render-production-2f86.up.railway.app/posts/all?page=${page}&&limit=${limit}`
  );

  return res;
};
