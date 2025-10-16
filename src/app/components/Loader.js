import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "150px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "16px", color: "#777" }}>
        Loading, please wait for a few seconds...
      </p>
    </div>
  );
}
