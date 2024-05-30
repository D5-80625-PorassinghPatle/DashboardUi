import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

const Trips = ({ trips }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Trips</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative">
          <CircularProgress variant="determinate" value={100} size={100} />
          <Typography variant="h6" component="div" position="absolute">
            {trips.total}
          </Typography>
        </Box>
        <Typography variant="h6">Total: {trips.total}</Typography>

        <Typography>Upcoming: {trips.upcoming}</Typography>
        <Typography>Ongoing: {trips.ongoing}</Typography>
        <Typography>Completed: {trips.completed}</Typography>
      </CardContent>
    </Card>
  );
};

export default Trips;
