import { Box } from "@chakra-ui/react";
import React from "react";
import AdminTable from "../components/admin/AdminTable";
import PieChart from "../components/admin/PieChart";

const Admin = () => {
  return (
    <Box my={"3%"}>
      <PieChart />
      <AdminTable />
    </Box>
  );
};

export default Admin;
