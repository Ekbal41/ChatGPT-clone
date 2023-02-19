import { CheckIcon, InfoOutlineIcon, SunIcon } from "@chakra-ui/icons";
import { Avatar, Box, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import R from '../assets/R.png'

function HomyTwo() {
  return (
    <Box minW={{ md: "965px" }} h={`calc(100vh - 100px)`} className="scroll">
      <Box paddingTop={2} paddingBottom={2}>
        <Box display="flex" w={{base:"100%", md:"70%"}} marginX={"auto"}>
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
              AV
            </Box>
            
          </Box>
          <Box padding={4}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
            quisquam!
          </Box>
        </Box>
      </Box>
      <Box bg={"#f7f7f8"} paddingTop={2} borderTop={"1px solid #d9d9e3" }borderBottom={"1px solid #d9d9e3"}>
        <Box display="flex" w={{base:"100%", md:"70%"}} marginX={"auto"} minH={16}>
          <Box  padding={4}>
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
              AI
            </Box>
          </Box>
          <Box  padding={4}>
          My name is ChatGPT. I am an artificial intelligence language model designed to assist with various tasks and answer questions to the best of my ability. How may I assist you today?
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomyTwo;
