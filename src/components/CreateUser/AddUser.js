import React from "react";
import { addNewUser } from "../../Utils/RestApi";
import { formTitles } from "../../Utils/Urls";
import UserForm from "../UserForm/UserForm";

export default function AddUser() {
  return (
    <UserForm
      className="user-form"
      formTitle={formTitles.ADD}
      submitUserData={addNewUser}
    />
  );
}
