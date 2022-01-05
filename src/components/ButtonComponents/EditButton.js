import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { Tooltip } from "@material-ui/core";
export default function EditButton({ userId }) {
  return (
    <Tooltip
    title="Click To Edit"
    placement="top"
  >
    <Link to={`/edit/${userId}`} className="link-to-edit">
      <EditIcon fontSize="small" style={{color:"purple" }} />
      
    </Link>
    </Tooltip>
  );
}
