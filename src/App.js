import React, { useState } from "react";
import AddUser from "./AddUser/AddUser";
import UsersList from "./UsersList/UsersList";
import ErrorModal from "./ErrorModal/ErrorModal";

function App() {
  const [givenUser, setUsers] = useState([]);

  const onAddUserHandler = (userData) => {
    setUsers((prevUsers) => {
      return [userData, ...prevUsers];
    });
  };

  const okayHandler = () => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.slice(); 
      updatedUsers.shift(); 
      return updatedUsers;
    });
  };

  const invalidAgeMessage = "enter an age above 0 please";
  const emptyInputMessage = "Please enter a valid name and age (non-empty values)";

  let componentToRender;

  if (givenUser.length > 0 && givenUser[0].age < 0) {
    componentToRender = (
      <ErrorModal clickedOkay={okayHandler} message={invalidAgeMessage} />
    );
  } else if (
    givenUser.length > 0 &&
    (givenUser[0].username === "" || givenUser[0].age === "")
  ) {
    componentToRender = (
      <ErrorModal clickedOkay={okayHandler} message={emptyInputMessage} />
    );
  } else {
    componentToRender = <UsersList users={givenUser} />;
  }




  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      {componentToRender}
    </div>
  );
}

export default App;
