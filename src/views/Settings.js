import React from "react";
import WithLayout from "../components/WithLayout";

const Settings = () => {
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
        Settings
      </div>
    </WithLayout>
  );
};

export default Settings;
