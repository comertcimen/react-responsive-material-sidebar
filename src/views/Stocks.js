import React from "react";
import WithLayout from "../components/WithLayout";

const Stocks = () => {
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
        Stocks
      </div>
    </WithLayout>
  );
};

export default Stocks;
