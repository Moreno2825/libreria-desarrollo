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
import HistoryUserRepo from "@/infraestructure/implementation/httpRequest/axios/HistoryUserRepo";
import GetAllHistoryUserUseCase from "@/application/usecases/historyUserUseCase/GetAllHistoryUserUseCase";
import { useSelector } from "react-redux";

function createData(_id, amount, date) {
  return {
    _id,
    amount,
    date,
  };
}

function Row(props) {
  const { row, compra } = props;
  const [open, setOpen] = useState(false);

  if (!row || !row._id || !compra) {
    return null;
  }

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
          1
        </TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">{row.amount}</TableCell>
      </TableRow>
      <TableRow style={books}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead></TableHead>
                <TableBody>
                  {compra
                    .filter((compraItem) => compraItem.idUser === row._id)
                    .map((historyRow, index) => (
                      <TableRow key={index}>
                        <TableCell
                          align="left"
                          style={{
                            border: "none",
                            width: "475px",
                            padding: "10px",
                            textIndent: "50px",
                          }}
                        >
                          {historyRow.name}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            border: "none",
                            width: "500px",
                            padding: "10px",
                            textIndent: "50px",
                          }}
                        >
                          $ {historyRow.quantity}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            border: "none",
                            width: "500px",
                            padding: "10px",
                            textIndent: "50px",
                          }}
                        >
                          $ {historyRow.totalAmount}
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
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  compra: PropTypes.array.isRequired,
};

export default function TableHistory() {
  // Inicializa lo que le estoy pasando a mi tabla
  const [rows, setRows] = useState([]);

  const [compra, setCompra] = useState([]);

  // obtengo el id del usuario que inicio sesion
  const userId = useSelector((state) => state.user._id);

  /// DE CAJON PARA CONSUMIR
  const historyRepo = new HistoryUserRepo(userId);
  const historyUserCase = new GetAllHistoryUserUseCase(historyRepo);

  const fetchHistory = async () => {
    try {
      const response = await historyUserCase.run();
      const formattedData = response.data.map(item => createData(item._id, item.amount, item.date));
      setRows(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  // ESTO ES PARA QUE HAGA EL EFFECT EN LA PAGINA
  useEffect(() => {
    fetchHistory();
  },);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ border: "none" }} style={fields}>
            <TableCell />
            <TableCell>Compra</TableCell>
            <TableCell align="center">Monto</TableCell>
            <TableCell align="center">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row._id} row={row} compra={compra}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
