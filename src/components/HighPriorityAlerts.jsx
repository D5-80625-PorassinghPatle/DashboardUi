import React from 'react';
import { useSelector } from 'react-redux';
import { selectDashboard } from '../redux/dashboardSlice';
import { Card, CardContent, Typography, Button, Grid, Paper } from '@mui/material';

const HighPriorityAlerts = () => {
  const dashboard = useSelector(selectDashboard);
  const { highPriorityAlerts } = dashboard;

  return (
    <Paper elevation={3} style={{ borderRadius: '10px', padding: '20px', marginTop: '20px' }}>
        <h2> High Priority alters (14) </h2>
      {highPriorityAlerts.map(alert => (
        <Card key={alert.id} style={{ marginBottom: '10px', borderRadius: '10px' }}>
          <CardContent>
            <Typography variant="h6">{alert.title}</Typography>
            <Typography variant="body2">{alert.date}</Typography>
            <Typography variant="body2">{alert.description}</Typography>
            <Grid container spacing={1} style={{ marginTop: '10px' }}>
              <Grid item>
                <Button variant="contained" color="primary">Resolve</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary">Ignore</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
};

export default HighPriorityAlerts;
