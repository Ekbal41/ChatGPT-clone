import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </>
  );
}

export default App;
