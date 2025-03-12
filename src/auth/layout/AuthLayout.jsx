import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <>
      <Grid
        container
        spacing={0}
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
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          sx={{
            width: { sm: 450 },
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            {title}
          </Typography>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
