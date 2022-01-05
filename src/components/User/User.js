import React, { useState } from "react";
import {Status } from "../../Utils/RestApi";
import UserTableRow from "../TableComponents/UserTableRow";
import { statuses, serverErrorMessage } from "../../Utils/Urls";

export default function User({ user }) {
  const [status, setStatus] = useState(user.status);
  const userId = user.id;
  const firstName = user.first_name;
  const lastName = user.last_name;
  const creationDate = new Date(user.created_at).toDateString();

  const isLocked = status === statuses.LOCKED;

  const updateStatus = (event) => {
    let newStatus = isLocked ? statuses.ACTIVE : statuses.LOCKED;
   Status(newStatus, user.id)
      .then(() => setStatus(newStatus))
      .catch(() => alert(serverErrorMessage));
  };

  const attributeStyle = {
    textDecoration: isLocked ? "line-through" : "none",
    color: isLocked ? "grey" : "none",
    
  };

  return (
    <UserTableRow
      className="user-table-row"
      userId={userId}
      attributeStyle={attributeStyle}
      firstName={firstName}
      lastName={lastName}
      creationDate={creationDate}
      isLocked={isLocked}
      updateStatus={updateStatus}
    />
  );
}
