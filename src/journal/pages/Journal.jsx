import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views/NoteView";

export const Journal = () => {
  return (
    <>
      <JournalLayout>
        <NothingSelectedView />
        <NoteView />
      </JournalLayout>
    </>
  );
};
