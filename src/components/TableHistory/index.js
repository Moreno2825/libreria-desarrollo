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
import GetOneHistoryUserUseCase from "@/application/usecases/historyUserUseCase/GetOneHistoryUserUseCase";

function createData(_id, amount, date) {
  return {
    _id,
    amount,
    date,
  };
}

function Row(props) {
  const { row, userId } = props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const historyRepo = new HistoryUserRepo(userId);
  const oneHistoryUserCase = new GetOneHistoryUserUseCase(historyRepo);
  const fetchCompra = async () => {
    try {
      const response = await oneHistoryUserCase.run(row._id);
      const data = response.data;
      
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!row || !row._id) {
    return null;
  }

  useEffect(() => {
    fetchCompra()
  }, [])

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
      <TableRow style={data}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                </TableHead>
                <TableBody>
                <TableHead>
                </TableHead>
                  {
                    data.books?.map((book, index) => (
                      <TableRow key={index}>
                        <TableHead>
                </TableHead>
                        <TableCell
                          align="left"
                          style={{
                            border: "none",
                            width: "475px",
                            padding: "10px",
                            textIndent: "50px",
                            
                          }}
                        > 
                          {book.name}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            border: "none",
                            width: "500px",
                            padding: "10px",
                            textIndent: "50px",
                            textAlign: "center",
                            color: "#2A2A2A",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "normal", 
                          }}
                        >
                          {book.quantity}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            border: "none",
                            width: "500px",
                            padding: "10px",
                            textIndent: "50px",
                            textAlign: "center"
                          }}
                        >
                          $ {book.totalAmount}
                        </TableCell>
                      </TableRow>
                    )) 
                  }
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

  // obtengo el id del usuario que inicio sesion
  const userId = useSelector((state) => state.user._id);

  /// DE CAJON PARA CONSUMIR
  const historyRepo = new HistoryUserRepo(userId);
  const historyUserCase = new GetAllHistoryUserUseCase(historyRepo);
  const oneHistoryUserCase = new GetOneHistoryUserUseCase(historyRepo);

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
  }, []);

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
            <Row key={row._id} userId={userId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
