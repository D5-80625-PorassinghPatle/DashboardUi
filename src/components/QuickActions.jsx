import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { AddBox, DirectionsCar, LocalShipping, PersonAdd, Assessment } from '@mui/icons-material';

const QuickActions = () => (
  <Paper elevation={3} style={{ borderRadius: '10px', padding: '20px' }}>
    <Typography variant="h6" gutterBottom>
      Quick Actions
    </Typography>
    <Grid container spacing={2} style={{ marginTop: '20px' }}>
      <Grid item>
        <Button variant="outlined" startIcon={<AddBox />} sx={{ borderRadius: '20px' }}>Create Indents</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" startIcon={<DirectionsCar />} sx={{ borderRadius: '20px' }}>Add Vehicle</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" startIcon={<LocalShipping />} sx={{ borderRadius: '20px' }}>Add Trailer</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" startIcon={<PersonAdd />} sx={{ borderRadius: '20px' }}>Add Driver</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" startIcon={<Assessment />} sx={{ borderRadius: '20px' }}>Add Indents</Button>
      </Grid>
    </Grid>
  </Paper>
);

export default QuickActions;
