import React from "react";
import { shallow } from "enzyme";
import AddUser from "../../components/CreateUser/AddUser";
import { formTitles } from "../../Utils/Urls";
import { addNewUser } from "../../Utils/RestApi";

const addUser = shallow(<AddUser />);
const userForm = addUser.find(".user-form");

it("AddUser renders UserForm", () => {
  expect(userForm.length > 0).toBe(true);
});

it("AddUser renders UserForm with correct props", () => {
  expect(userForm.props()["formTitle"]).toBe(formTitles.ADD);
  expect(userForm.props()["submitUserData"]).toBe(addNewUser);
});
