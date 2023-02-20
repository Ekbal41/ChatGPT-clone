import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Test() {
  return (
    <>
      <div className="App">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("GeeksForGeeks")
              .start();
          }}
        />
      </div>
    </>
  );
}

export default Test;
