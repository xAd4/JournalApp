import { Routes, Route, Navigate } from "react-router-dom";
import { JournalApp } from "../JournalApp";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<JournalApp />} />
      </Routes>
    </>
  );
};
