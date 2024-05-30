import React from 'react';
import { Card, CardContent, Typography ,  CircularProgress, Box } from '@mui/material';

const Expenses = ({ expenses }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">Expenses</Typography>
      <Box display="flex" justifyContent="center" alignItems="center" position="relative">
          <CircularProgress variant="determinate" value={100} size={100} />
          <Typography variant="h6" component="div" position="absolute">{expenses.total}</Typography>
        </Box>
      <Typography variant="h6">Total: {expenses.total}</Typography>
      <Typography>Freight Charge: {expenses.freightCharge}</Typography>
      <Typography>Driver Charge: {expenses.driverCharge}</Typography>
      <Typography>Other Charges: {expenses.otherCharges}</Typography>
    </CardContent>
  </Card>
);

export default Expenses;
