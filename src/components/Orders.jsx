import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const Orders = ({ orders }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">Orders</Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative">
        <CircularProgress variant="determinate" value={100} size={100} />
        <Typography variant="h6" component="div" position="absolute">
          {orders.total}
        </Typography>
      </Box>

      <Typography variant="h6">Total: {orders.total}</Typography>
      <Typography>Upcoming: {orders.upcoming}</Typography>
      <Typography>Ongoing: {orders.ongoing}</Typography>
      <Typography>Completed: {orders.completed}</Typography>
    </CardContent>
  </Card>
);

export default Orders;
