import { StartOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
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
          borderRadius: 3,
          padding: 4,
        }}
      >
        <Grid item xs={12}>
          <StartOutlined sx={{ fontSize: 100, color: "white" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography color="white" variant="h5">
            Lorem ipsum dolor sit amet.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
