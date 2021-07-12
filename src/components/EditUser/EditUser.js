import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserForm from "../UserForm/UserForm";
import Loader from "../Loader/Loader";
import { formTitles, serverErrorMessage } from "../../Utils/Urls";
import { editUser, getUserById } from "../../Utils/RestApi";

export default function EditUser() {
  const { userId } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(userId)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => alert(serverErrorMessage));
  }, [userId]);

  const setUserData = (userData) => {
    setFirstName(userData.first_name);
    setLastName(userData.last_name);
  };

  const submitUserData = (editedFirstName, editedLastName) => {
    return editUser(editedFirstName, editedLastName, userId);
  };

  return isLoading ? (
    <Loader className="loader" />
  ) : (
    <UserForm
      className="user-form"
      originalFirstName={firstName}
      originalLastName={lastName}
      formTitle={formTitles.EDIT}
      submitUserData={submitUserData}
    />
  );
}
