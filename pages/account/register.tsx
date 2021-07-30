import Link from "next/link";
import Layout from "@/components/layout";
import AuthContext from "@/context/AuthContext";
import { useState, useEffect, useContext } from "react";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  CardActions,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  Paper,
} from "@material-ui/core";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Passwords do not match!");
      return;
    }

    register({ username, email, password });
  };

  return (
    <Paper
      sx={{ p: 2, margin: "auto", marginTop: 10, maxWidth: 500, flexGrow: 1 }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography style={{ fontSize: "1.6rem" }}> Register </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" value="Register" variant="contained">
            Register
          </Button>
        </Grid>
      </form>

      <FormHelperText>
        Already have an account?{" "}
        <Link href="/account/login">
          <Button color="secondary" variant="outlined">
            Login
          </Button>
        </Link>
      </FormHelperText>
    </Paper>
  );
}
