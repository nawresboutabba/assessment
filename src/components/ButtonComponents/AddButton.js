import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function AddButton() {
  return (
    <Link to="/new" className="link-to-add">
      <Fab size="small" color="#69cff7" aria-label="add">
        <AddIcon />
      </Fab>
    </Link>
  );
}
