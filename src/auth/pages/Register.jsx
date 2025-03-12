import { Button, Grid, Link, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";

export const Register = () => {
  return (
    <>
      <AuthLayout title="Register">
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                type="text"
                fullWidth
                placeholder="Ángel Estarita"
              />
            </Grid>
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

          <Grid container sx={{ mb: 2 }}>
            <Grid item xs={6} sm={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"}>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Sign In
            </Link>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
