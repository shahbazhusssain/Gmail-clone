// src/MailList.js

import React from 'react';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';

const emails = [
  { id: 1, subject: "Meeting Reminder", body: "Don't forget the meeting tomorrow at 10 AM." },
  { id: 2, subject: "Project Update", body: "The project is on track for completion." },
  // Add more emails here
];

function MailList() {
  return (
    <Container>
      <Typography variant="h4">Inbox</Typography>
      <List>
        {emails.map((email) => (
          <ListItem button key={email.id}>
            <ListItemText primary={email.subject} secondary={email.body} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default MailList;
