import React from 'react';
import './App.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  { id: 1, name: 'Raju Thorat', amount: 1100000, date: '10/12/2024' },
  { id: 2, name: 'Ajay Shinde', amount: 31151, date: '11/12/2024' },
  { id: 3, name: 'Deepak Navle', amount: 31151, date: '12/12/2024' },
  { id: 4, name: 'Vinaya Rao Shinde', amount: 51151, date: '14/12/2024' },
];

const amount = (amount) => {
  return `₹${amount.toLocaleString()}`;
}

function App() {
  return (
    <div className="App">
      <h1>Jai Shree Gajanan</h1>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SN</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{amount(row.amount)}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;