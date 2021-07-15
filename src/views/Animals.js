import React from "react";
import WithLayout from "../components/WithLayout";

const Animals = () => {
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
        Animals
      </div>
    </WithLayout>
  );
};

export default Animals;
