import React from "react";
import { Tooltip, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Add = () => {
  return (
    <Tooltip
      title="Agregar"
      sx={{
        position: "fixed",
        bottom: 20,
        left: { xs: "calc(50% - 25px)", md: 30 },
      }}
    >
      <Fab aria-label="add" color="primary">
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default Add;
