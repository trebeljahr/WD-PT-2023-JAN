import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function ProfilePage() {
  const { logOutUser, user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      {user && user.email}
      ProfilePage
      <button onClick={logOutUser}>Logout</button>
    </div>
  );
}

export default ProfilePage;
