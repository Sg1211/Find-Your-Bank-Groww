import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableCell,
  TableRow,
  TableBody,
  CircularProgress,
} from "@material-ui/core";

const BanksList = (props) =>  {
  let navigate = useNavigate();
  const {
    banksList,
    loading
  } = props;

  const _onBankClick = (bank) => {
    navigate(`/bank-details/${bank.ifsc}`, {state: bank});
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table style={{ minWidth: "600px" }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#D3D3D3", height: '70px' }}>
            <TableRow>
              <TableCell>BANK</TableCell>
              <TableCell align="right">IFSC</TableCell>
              <TableCell align="right">BRANCH</TableCell>
              <TableCell align="right">BANK ID</TableCell>
              <TableCell align="right">ADDRESS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <div className="progress"><CircularProgress /></div>
                </TableCell>
              </TableRow>
            ) : banksList.length > 0 ? (
              banksList.map((bank) => (
                <TableRow
                  key={bank.ifsc}
                  className="row"
                  onClick={(e) => {
                    if (e.target.className.includes("column")) {
                      _onBankClick(bank)
                    }
                  }}
                >
                  <TableCell align="left" width="200" className="column">
                    {bank.bank_name}
                  </TableCell>
                  <TableCell align="right" width="140" className="column">
                    {bank.ifsc}
                  </TableCell>
                  <TableCell align="right" width="300" className="column">
                    {bank.branch}
                  </TableCell>
                  <TableCell align="right" width="120" className="column" >
                    {bank.bank_id}
                  </TableCell>
                  <TableCell align="right" className="column">
                    {bank.address}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>
                  <div className="error">
                   No Data Found | Please Select Other Options
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BanksList;

