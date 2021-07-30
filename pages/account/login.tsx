import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
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
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useContext(AuthContext);

  useEffect(() => error && alert(error));
  const handleSubmit = (e: any) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <Paper
      sx={{ p: 2, margin: "auto", marginTop: 10, maxWidth: 500, flexGrow: 1 }}
    >
      <form onSubmit={handleSubmit} color="primary">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography style={{ fontSize: "1.6rem" }}> Login </Typography>
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
            <Button type="submit" value="Login" variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <FormHelperText>
        Don't have an account?{" "}
        <Link href="/account/register">
          <Button color="secondary" variant="outlined">
            Register
          </Button>
        </Link>
      </FormHelperText>
    </Paper>
  );
}
