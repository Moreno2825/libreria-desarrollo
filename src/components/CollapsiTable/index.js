import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fields, datas, books } from "./index.style";
import GetAllUserUseCase from "@/application/usecases/userUseCase/GetAllUserUseCase";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import { useSelector } from "react-redux";
import GetOneUserUseCase from "@/application/usecases/userUseCase/GetOneUserUseCase";

function createData(id, name, email, countBooks) {
  return {
    id,
    name,
    email,
    countBooks,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [compra, setCompra] = useState([]);

  const userId = useSelector((state) => state.user._id);
  const userRepo = new UserRepo(null, userId);
  const getOneUserUseCase = new GetOneUserUseCase(userRepo);

  const fetchUserData = async () => {
    try {
      const response = await getOneUserUseCase.run(row.id);
      setCompra(response.data); // Suponiendo que la respuesta tiene una propiedad data con la información del usuario
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [row.id]);

  return (
    <React.Fragment>
      <TableRow
        onClick={() => setOpen(!open)}
        style={datas}
        sx={{
          "& > *": {
            borderBottom: "unset",
            "line-height": 20,
            border: "px solid transparent",
          },
        }}
      >
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.countBooks}</TableCell>
      </TableRow>
      <TableRow style={books}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead></TableHead>
                <TableBody>
                  {compra.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell
                        align="left"
                        style={{
                          border: "none",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          padding: "10px",
                        }}
                      >
                        {historyRow.name}
                      </TableCell>

                      <TableCell
                        align="left"
                        style={{
                          border: "none",
                        }}
                      >
                        {historyRow.quantity}
                      </TableCell>

                      <TableCell
                        align="left"
                        style={{
                          border: "none",
                        }}
                      >
                        $ {historyRow.price}
                      </TableCell>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    countBooks: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const [users, setUsers] = useState([]);
  const userId = useSelector((state) => state.user._id);

  const userRepo = new UserRepo(null, userId);
  const userUseCase = new GetAllUserUseCase(userRepo);

  const fetchUsers = async () => {
    try {
      const response = await userUseCase.run();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const rows = users.map((user) =>
    createData(user._id, user.name, user.email, user.countBooks)
  );
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ border: "none" }} style={fields}>
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
