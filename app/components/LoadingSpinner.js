import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <div className="spinner-container">
        <div className="spinner"></div>
        <h1 className="mx-3">Yükleniyor</h1>
      </div>
    </>
  );
};

export default LoadingSpinner;
