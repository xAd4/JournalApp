import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <>
      <Grid
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
        <Grid
          container
          xs={3}
          sx={{ backgroundColor: "white", padding: 4, borderRadius: 2 }}
        >
          <Typography variant="h5" sx={{ mb: 3 }}>
            {title}
          </Typography>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
