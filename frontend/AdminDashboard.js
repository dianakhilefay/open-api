import * as React from "react";
import { useState } from "react";
import Login from "./Login";
import { Button, Paper, Typography, TextField, Box, List, ListItem, ListItemText } from "@mui/material";

export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [apis, setApis] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", endpoint: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAddApi = e => {
    e.preventDefault();
    if (!form.name || !form.endpoint) return;
    setApis([...apis, { ...form }]);
    setForm({ name: "", description: "", endpoint: "" });
  };

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  return (
    <Box sx={{ minHeight: "100vh", background: "#f5f6fa", py: 6 }}>
      <Paper elevation={4} sx={{ maxWidth: 600, mx: "auto", p: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>Dashboard Admin</Typography>
        <form onSubmit={handleAddApi} style={{ marginBottom: 32 }}>
          <TextField label="Nom de l'API" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Description" name="description" value={form.description} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Endpoint" name="endpoint" value={form.endpoint} onChange={handleChange} fullWidth margin="normal" required />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Ajouter l'API</Button>
        </form>
        <Typography variant="h6" gutterBottom>APIs publiées</Typography>
        <List>
          {apis.map((api, idx) => (
            <ListItem key={idx} divider>
              <ListItemText
                primary={api.name + " (" + api.endpoint + ")"}
                secondary={api.description}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
