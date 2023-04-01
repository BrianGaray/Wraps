import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Theme = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div class="m-5">
      <h2 class="mb-4 text-2xl text-green-700 font-bold">Buttons</h2>
      <button
        data-act-class="shadow-outline"
        data-set-theme="garden"
        class="bg-green-700 focus:outline-none m-1 rounded p-2"
      >
        Default
      </button>
      <button
        data-act-class="shadow-outline"
        data-set-theme="dark"
        class="bg-green-700 focus:outline-none m-1 rounded p-2"
      >
        Dark
      </button>
      <button
        data-act-class="shadow-outline"
        data-set-theme="valentine"
        class="bg-green-700 focus:outline-none m-1 rounded p-2"
      >
    valentine
      </button>
      <button
        data-act-class="shadow-outline"
        data-set-theme="night"
        class="bg-green-700 focus:outline-none m-1 rounded p-2"
      >
      night
      </button>
    </div>
  );
};

export default Theme;
