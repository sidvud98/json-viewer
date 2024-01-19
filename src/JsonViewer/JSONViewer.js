import React, { useState } from "react";
import { JsonElement } from "./JsonElement";


export default function JSONViewer({ inpJson }) {
  return (
    <>
      <div className="jsonContainer">
        <div className="jsonContainer">
          <JsonElement json={inpJson} />
        </div>
      </div>
    </>
  );
}

