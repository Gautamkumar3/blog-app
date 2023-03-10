import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Avatar,
  Box,
} from "@chakra-ui/react";
import "./admin.css"
import { getAllUserData } from "../../store/admin/admin.action";
import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import PieChart from "./PieChart";

const AdminTable = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.admin);
  console.log(data);

  useEffect(() => {
    dispatch(getAllUserData());
  }, []);


  return (
    <Box w="50vw">
      <TableContainer overflowX={"hidden"} overflowY="scroll" height={"70vh"}>
        <Table variant="striped">
          <Thead h={"70px"} bg="#604d9e" color="#fff" pos="sticky" top="0" zIndex={"999"}>
            <Tr>
              <Th></Th>
              <Th color="#fff">User Name</Th>
              <Th color="#fff">Email</Th>
              <Th color="#fff">Role</Th>
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((user) => (
              <Tr key={user._id}>
                <Td>
                  {" "}
                  <Avatar
                    size={"sm"}
                    name={user.name}
                    src="https://bit.ly/tioluwani-kolawole"
                  />
                </Td>

                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>
                  <EditIcon w={6} h={6} _hover={{ cursor: "pointer" }} mx={4} />
                  <DeleteIcon w={6} h={6} _hover={{ cursor: "pointer" }} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminTable;
