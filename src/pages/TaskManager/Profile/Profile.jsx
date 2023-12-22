import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="card max-w-sm rounded-none p-5 mx-auto mt-5 shadow-2xl">
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img
              src={user?.photoURL}
              alt="Tailwind-CSS-Avatar-component"
              className=""
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl text-center">{user?.displayName}</h2>
      <p className="text-center">{user?.email}</p>
    </div>
  );
};

export default Profile;
