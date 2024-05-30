import React from 'react';
import { Card, CardContent, Typography ,Box, CircularProgress} from '@mui/material';

const Revenue = ({ revenue }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">Revenue</Typography>
      <Box display="flex" justifyContent="center" alignItems="center" position="relative">
          <CircularProgress variant="determinate" value={100} size={100} />
          <Typography variant="h6" component="div" position="absolute">{revenue.total}</Typography>
        </Box>
      <Typography variant="h6">Total: {revenue.total}</Typography>
      <Typography>Upcoming: {revenue.upcoming}</Typography>
      <Typography>Ongoing: {revenue.ongoing}</Typography>
      <Typography>Completed: {revenue.completed}</Typography>
    </CardContent>
  </Card>
);

export default Revenue;
