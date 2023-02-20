import React from "react";
import { Route, Routes } from "react-router-dom";
import Singlepage from "../Pages/Singlepage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AllBlog from "../Pages/AllBlog";
import CreateBlog from "../Pages/CreateBlog";
import AuthorBlog from "../Pages/AuthorBlog";
import ErrorPage from "../Pages/ErrorPage";
import Tech from "../Pages/Tech";
import BlogCategory from "../Pages/BlogCategory";
import EnterTainment from "../Pages/EnterTainment";
import Business from "../Pages/Business";
import World from "../Pages/World";
import LifeStyle from "../Pages/LifeStyle";

const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<AllBlog />} />
      <Route path="/tech" element={<Tech />} />
      <Route path="/entertainment" element={<EnterTainment />} />
      <Route path="/lifestyle" element={<LifeStyle />} />
      <Route path="/business" element={<Business />} />
      <Route path="/world" element={<World />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create" element={<CreateBlog />} />
      <Route path="creator/:author" element={<AuthorBlog />} />
      <Route path="/author/:id" element={<Singlepage />} />
      <Route path="/blog/:id" element={<Singlepage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Allroute;
