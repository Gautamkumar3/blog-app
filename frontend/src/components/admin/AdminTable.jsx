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
} from "@chakra-ui/react";
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

  return <PieChart/>

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead h={"80px"}>
          <Tr>
            <Th></Th>
            <Th>User Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
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
  );
};

export default AdminTable;
