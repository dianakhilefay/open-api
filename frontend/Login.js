import * as React from "react";
import { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";

export default function Login({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mot de passe admin simple, à améliorer en prod
    if (password.trim().length > 0) {
      onLogin();
    } else {
      setError("Mot de passe requis");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 32, maxWidth: 350, margin: "100px auto" }}>
      <Typography variant="h5" align="center" gutterBottom>Connexion Admin</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Mot de passe"
          type="password"
          fullWidth
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin="normal"
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
          Se connecter
        </Button>
      </form>
    </Paper>
  );
}
