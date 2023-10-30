import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { users, compra } from "@/constants";
import { fields, datas, books } from './index.style';

function createData(id, name, email, libros, lastName) {
  return {
    id,
    name,
    email,
    libros,
    lastName,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow onClick={() => setOpen(!open)} style={datas} sx={{ '& > *': { borderBottom: 'unset', "line-height": 20, border: 'px solid transparent' } }}>
        <TableCell>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name} {row.lastName}
        </TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.libros}</TableCell>
      </TableRow>
      <TableRow  style={books} >
        <TableCell  style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                </TableHead>
                <TableBody>
                  {compra
                    .filter((compraItem) => compraItem.idUser === row.id)
                    .map((historyRow, index) => (
                      <TableRow  key={index}>
                        <TableCell align="left" style={{border: 'none', width: '475px', padding:'10px',  textIndent: '50px' }}>
                          {historyRow.book}</TableCell>

                        <TableCell align="left" style={{border: 'none', width: '500px', padding:'10px',  textIndent: '50px' }}>
                          $ {historyRow.price}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    libros: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = users.map((user) =>
  createData(user.id, user.name, user.email, user.libros, user.lastName)
);

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{border: 'none'}} style={fields}>
            <TableCell />
            <TableCell>Nombre</TableCell>
            <TableCell align="center">Correo</TableCell>
            <TableCell align="center">Cantidad de compra</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}