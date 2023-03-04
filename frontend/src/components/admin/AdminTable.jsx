import React from "react";
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

const AdminTable = () => {

 

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
