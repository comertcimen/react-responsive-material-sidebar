import React from "react";
import WithLayout from "../components/WithLayout";

const Dashboard = () => {
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
        Dashboard
      </div>
    </WithLayout>
  );
};

export default Dashboard;
