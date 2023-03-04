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
} from "@chakra-ui/react";
import { getAllUserData } from "../../store/admin/admin.action";
import { useDispatch, useSelector } from "react-redux";

const AdminTable = () => {
    const dispatch = useDispatch();
    
    const {data} = useSelector((store) => store.admin)
    console.log(data)

  useEffect(() => {
    dispatch(getAllUserData());
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="green">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>User Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
