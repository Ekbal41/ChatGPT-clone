import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

import { ApiContext } from "../context/ApiProvider";

function HomyTwo() {
  const { allMessages } = useContext(ApiContext);
  const blankRef = useRef();

  const scrollDown = () => {
    blankRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollDown();
  }, [allMessages]);

  return (
    <Box minW={{ md: "965px" }} h={`calc(100vh - 100px)`} className="scroll">
      {allMessages.map((message, index) => {
        return (
          <Box
            key={index}
            bg={message.type === "bot" ? "#f7f7f8" : "white"}
            paddingTop={2}
            borderTop={"1px solid #d9d9e3"}
            borderBottom={"1px solid #d9d9e3"}
          >
            <Box
              display="flex"
              w={{ base: "100%", md: "70%" }}
              marginX={"auto"}
              minH={16}
            >
              <Box padding={4}>
                <Box
                  borderRadius={4}
                  bg={"#1bbd9d"}
                  color="white"
                  h={8}
                  w={8}
                  pl={2}
                  pt={"6px"}
                  pr={2}
                  fontSize={13}
                >
                {message.type === "bot" ? "🤖" : "😊"}
                </Box>
              </Box>

              {message.type === "bot" ? (
                <Box padding={4}>
                  <Typewriter
                    options={{
                      delay: 40,
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString(message.message).start();
                    }}
                  />
                </Box>
              ) : (
                <Box padding={4}>{message.message}</Box>
              )}
            </Box>
          </Box>
        );
      })}
      <div ref={blankRef}></div>
    </Box>
  );
}

export default HomyTwo;
