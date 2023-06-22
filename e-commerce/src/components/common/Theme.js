import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Theme = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <button
        className="btn"
        data-act-class="shadow-outline"
        data-set-theme="default"
      >
        Default
      </button>
      <button
        className="btn"
        data-act-class="shadow-outline"
        data-set-theme="dark"
      >
        Dark
      </button>
      <button
        className="btn"
        data-act-class="shadow-outline"
        data-set-theme="valentine"
      >
        Love
      </button>
    </div>
  );
};

export default Theme;
