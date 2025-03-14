import { Google } from "@mui/icons-material";
import { Grid, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const Login = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              placeholder="email@email.com"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              sx={{ mb: 2 }}
              placeholder="******"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={12}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Login
            </Button>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              <Google />
            </Button>
          </Grid> */}
        </Grid>

        <Grid container direction={"row"} justifyContent={"end"}>
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Create account
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
