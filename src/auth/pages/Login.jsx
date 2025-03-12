import { Grid2, Typography, TextField, Button } from "@mui/material";

export const Login = () => {
  return (
    <Grid2
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid2
        item
        xs={3}
        sx={{ backgroundColor: "white", padding: 4, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form>
          <TextField
            label="Email"
            type="email"
            fullWidth
            sx={{ mb: 2 }}
            placeholder="email@email.com"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
            placeholder="******"
          />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Login
          </Button>
        </form>
      </Grid2>
    </Grid2>
  );
};
