import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-full w-full absolute top-0 left-0 space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-base-content"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-base-content"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-base-content"></div>
      </div>
    </div>
  );
};

export default Loader;
