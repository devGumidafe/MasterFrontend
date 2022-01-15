import React, { useState, useEffect } from "react";

export const useCustomList = () => {
  const breakpoints = {
    mobile: 600,
    tablet: 960,
    desktop: 1280,
  };

  const getColumns = (width: number) => {
    if (width < breakpoints.mobile) {
      return 1;
    } else if (width < breakpoints.tablet) {
      return 2;
    } else if (width < breakpoints.desktop) {
      return 3;
    } else {
      return 3;
    }
  };

  const [columns, setColumns] = useState(getColumns(window.innerWidth));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setColumns(getColumns(window.innerWidth));
    });
  }, []);

  return { columns };
};
