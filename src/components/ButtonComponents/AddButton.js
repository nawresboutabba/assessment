import React from "react";
import { Link } from "react-router-dom";
 import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Tooltip } from "@material-ui/core";
export default function AddButton() {
  return (
    <Tooltip
    title="Click To Add"
    style={{
      position: 'fixed',
      right: 65,
      bottom: 65,
}}  >
    <Link to="/new" className="link-to-add">
      <Fab size="big" color="#69cff7" aria-label="add"    style={{
                position: 'fixed',
                right: 65,
                bottom: 65,
          }}>
        <AddIcon />
      </Fab>
    </Link>
    </Tooltip>
  );
}
