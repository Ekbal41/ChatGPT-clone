import { CheckIcon, InfoOutlineIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

function Homyone() {
  return (
    <Box
    
      minW={{ md: "965px" }}
  
      h={`calc(100vh - 100px)`}
      padding={{ base: 0, md: 100 }}
      className="scroll"
      justifyContent={"space-between"}
    >
      <Text
        size={"md"}
        fontWeight={"bold"}
        fontSize={30}
        marginBottom={10}
        color="#343541"
        textAlign={"center"}
        marginTop={{base:4}}
      >
        ChatGPT
      </Text>
      <Box>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={0}
        >
          <GridItem>
            <Center as="div" display="flex" flexDir={"column"}>
              <SunIcon fontSize={20} ml={4} mb={2} mt={4} />
              <Text fontSize={20} marginLeft={4}>
                Examples
              </Text>
              <Box
                marginX={2}
                bg={"#f7f7f8"}
                padding={2}
                borderRadius={8}
                cursor="pointer"
                className="hov"
                marginTop={4}
                w={{base:350, md:"auto"}}
              >
                <Text textAlign={"center"} fontSize={14} marginLeft={4} >
                  "Explain quantum computing in simple terms" &gt;
                </Text>
              </Box>
              <Box
                marginX={2}
                bg={"#f7f7f8"}
                padding={2}
                borderRadius={8}
                cursor="pointer"
                className="hov"
                marginTop={4}
                w={{base:350, md:"auto"}}
              >
                <Text textAlign={"center"} fontSize={14} marginLeft={4}>
                  "Got any creative ideas for a 10 year old’s birthday?" &gt;
                </Text>
              </Box>
              <Box
                marginX={2}
                bg={"#f7f7f8"}
                padding={2}
                borderRadius={8}
                cursor="pointer"
                className="hov"
                marginTop={4}
                w={{base:350, md:"auto"}}
              >
                <Text textAlign={"center"} fontSize={14} marginLeft={4}>
                  "How do I make an HTTP request in Javascript?" &gt;
                </Text>
              </Box>
            </Center>
          </GridItem>
          <GridItem>
            <Center as="div" display="flex" flexDir={"column"}>
              <CheckIcon fontSize={20} ml={4} mb={2} mt={4} />
              <Text fontSize={20} marginLeft={4} >
                Capabilities
              </Text>
              <Box
                marginX={2}
                bg={"#f7f7f8"}
                padding={2}
                borderRadius={8}
                cursor="pointer"
                className="hov"
                w={{base:350, md:"auto"}}
                marginTop={4}
              >
                <Text textAlign={"center"} fontSize={14} marginLeft={4}>
                  Remembers what user said earlier in the conversation
                </Text>
              </Box>
              <Box
                marginX={2}
                bg={"#f7f7f8"}
                padding={2}
                borderRadius={8}
                cursor="pointer"
                className="hov"
                marginTop={4}
                w={{base:350, md:"auto"}}
              >
                <Text textAlign={"center"} fontSize={14} marginLeft={4}>
                  Allows user to provide follow-up corrections
                </Text>
              </Box>
              <Box
                marginX={2}
                bg={"#f7f7f8"}
                padding={2}
                borderRadius={8}
                w={{base:350, md:"auto"}}
                cursor="pointer"
                className="hov"
                marginTop={4}
              >
                <Text textAlign={"center"} fontSize={14} marginLeft={4}>
                  rained to decline inappropriate requests
                </Text>
              </Box>
            </Center>
          </GridItem>
          <GridItem>
            <Center as="div" display="flex" flexDir={"column"}>
              <InfoOutlineIcon fontSize={20} ml={4} mt={4} mb={2} />
              <Text fontSize={20} marginLeft={4} >
                Limitations
              </Text>
              <Box
                marginX={2}
                bg={"#f7f7f8"}
                padding={2}
                borderRadius={8}
                cursor="pointer"
                className="hov"
                w={{base:350, md:"auto"}}
                marginTop={4}
              >
                <Text textAlign={"center"} fontSize={14} marginLeft={4}>
                  May occasionally generate incorrect information"
                </Text>
              </Box>
              <Box
                marginX={2}
                bg={"#f7f7f8"}
                padding={2}
                borderRadius={8}
                cursor="pointer"
                className="hov"
                w={{base:350, md:"auto"}}
                marginTop={4}
              >
                <Text textAlign={"center"} fontSize={14} marginLeft={4}>
                  May occasionally produce harmful instructions or biased
                  content
                </Text>
              </Box>
              <Box
                marginX={2}
                bg={"#f7f7f8"}
                padding={2}
                borderRadius={8}
                cursor="pointer"
                className="hov"
                w={{base:350, md:"auto"}}
                marginTop={4}
              >
                <Text textAlign={"center"} fontSize={14} marginLeft={4}>
                  Limited knowledge of world and events after 2021
                </Text>
              </Box>
            </Center>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Homyone;
