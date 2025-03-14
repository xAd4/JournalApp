import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImagesGallery } from "../components/ImagesGallery";

export const NoteView = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Grid item>
          <Typography fontSize={39} fontWeight="light">
            28 de Febrero del 2024
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid>
        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Set title"
            label="title"
            sx={{ border: "none", mb: 1 }}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="What happend today?"
            minRows={5}
            sx={{ border: "none", mb: 1 }}
          />
        </Grid>

        <ImagesGallery />
      </Grid>
    </>
  );
};
