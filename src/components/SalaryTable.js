import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React from "react";

export default function SalaryTable({ amount }) {
  function createData(academicPeriod, salary, allowance) {
    return { academicPeriod, salary, allowance }; // ES6 Objects Syntax
  }

  const rows = [createData("Monthly salary", amount.salary, amount.allowance)];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Salary type</TableCell>
            <TableCell align="right">Basic salary</TableCell>
            <TableCell align="right">Allowance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.academicPeriod}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.academicPeriod}
              </TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell align="right">{row.allowance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
