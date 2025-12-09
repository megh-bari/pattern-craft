"use client";

import { useEffect } from "react";

export default function CarbonAd() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.carbonads.com/carbon.js?serve=CWBD62QJ&placement=patterncraftfun&format=cover";
    script.id = "_carbonads_js";
    script.async = true;

    document.getElementById("carbon-container")?.appendChild(script);
  }, []);

  return (
    <div
      id="carbon-container"
      style={{ minHeight: "120px" }} // so layout doesn't jump
    />
  );
}
