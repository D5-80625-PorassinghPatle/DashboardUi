import React from 'react';
import { useSelector } from 'react-redux';
import { selectDashboard } from '../redux/dashboardSlice';
import { Container, Grid, Box, AppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import { Search, Notifications, AccountCircle } from '@mui/icons-material';
import Orders from './Orders';
import Trips from './Trips';
import Revenue from './Revenue';
import Expenses from './Expenses';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import QuickActions from './QuickActions';
import HighPriorityAlerts from './HighPriorityAlerts';

const Dashboard = () => {
  const dashboard = useSelector(selectDashboard);

  return (
    <Box display="flex" height="100vh">
      <LeftSidebar />
      <Box component="main" flexGrow={5} display="flex" flexDirection="column">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              <IconButton type="submit" sx={{ p: 1 }}>
                <Search />
              </IconButton>
            </Box>
            <IconButton size="large" aria-label="show new notifications" color="inherit">
              <Notifications />
            </IconButton>
            <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 3, flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Orders orders={dashboard.orders} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Trips trips={dashboard.trips} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Revenue revenue={dashboard.revenue} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Expenses expenses={dashboard.expenses} />
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <QuickActions />
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <HighPriorityAlerts />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <RightSidebar />
    </Box>
  );
};

export default Dashboard;
