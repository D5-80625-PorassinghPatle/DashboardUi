import React from 'react';
import { List, ListItem, ListItemText, ListSubheader, Paper,  } from '@mui/material';

const RightSidebar = () => {
  return (
    <Paper style={{ padding: '10px', height: '100vh',width:"25vh" ,     overflowY: 'auto' }}>
      <List subheader={<ListSubheader>Today's Highlights</ListSubheader>}>
        <ListItem>
          <ListItemText primary="Income" secondary="100000 CAD (2 payments received)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Expenses" secondary="50000 CAD (5 payments paid)" />
        </ListItem>
      </List>
      <List subheader={<ListSubheader>Completed Activities</ListSubheader>}>
        <ListItem>
          <ListItemText primary="Gurpreet Singh created Load No. I-AAA-1325" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Aman Picked Up goods for Load No. I-AAA-1325" />
        </ListItem>
      </List>
      <List subheader={<ListSubheader>Scheduled Activities</ListSubheader>}>
        <ListItem>
          <ListItemText primary="Load No. I-AAA-1325 will be delivered by Aman" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default RightSidebar;
