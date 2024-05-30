import React from 'react';
import { List, ListItem, ListItemIcon, Drawer, Button, Box } from '@mui/material';
import { Dashboard, LocalShipping, AttachMoney, ReportProblem, Settings } from '@mui/icons-material';

const LeftSidebar = () => {
  return (
    <Box component="main" sx={{ flexGrow: 0.5, bgcolor: 'background.default', p: 3 }}>
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem>
            <Button component="div">
              <ListItemIcon><Dashboard /></ListItemIcon>
            </Button>
          </ListItem>
          <ListItem>
            <Button component="div">
              <ListItemIcon><LocalShipping /></ListItemIcon>
            </Button>
          </ListItem>
          <ListItem>
            <Button component="div">
              <ListItemIcon><AttachMoney /></ListItemIcon>
            </Button>
          </ListItem>
          <ListItem>
            <Button component="div">
              <ListItemIcon><ReportProblem /></ListItemIcon>
            </Button>
          </ListItem>
          <ListItem>
            <Button component="div">
              <ListItemIcon><Settings /></ListItemIcon>
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <Box >
        {/* Your main content here */}
      </Box>
    </Box>
  );
};

export default LeftSidebar;
