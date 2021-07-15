import React from "react";
import WithLayout from "../components/WithLayout";

const Profile = () => {
  return (
    <WithLayout>
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Profile
      </div>
    </WithLayout>
  );
};

export default Profile;
