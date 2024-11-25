'use client';

import React from "react";

const LoadingSpinner = () => {
  return (
    <div style={spinnerContainerStyle}>
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #ccc;
          border-top: 5px solid #007bff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

const spinnerContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f8f9fa",
};

export default LoadingSpinner;
