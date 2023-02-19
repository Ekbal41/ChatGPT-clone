import React, { useState } from "react";

import {
  Container,
  Grid,
  GridItem,
  Box,
  Input,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";
import {
  AddIcon,
  ChatIcon,
  ExternalLinkIcon,
  MoonIcon,
  StarIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Homyone from "../componants/Homyone";
import HomyTwo from "../componants/HomyTwo";

function Home() {
  const [isAsked, setIsAsked] = useState(false);
  const handleClick = () => {
    setIsAsked(true);
  };
  const handleKey = () => {
    if (event.key === "Enter") {
      setIsAsked(true);
    }
  };
  return (
    <>
      <Box>
        <Grid display={"flex"} h="100vh" >
          <GridItem
            bg="#202123"
            minW={260}
            display={{base: 'none', md:"flex"}}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Box
                h={10}
                cursor="pointer"
                margin={2}
                border="1px solid #38383a"
                borderRadius={4}
                color="white"
                display="flex"
                paddingTop={2}
                paddingLeft={2}
                paddingRight={2}
              >
                <AddIcon
                  fontSize={11}
                  marginTop={"5px"}
                  marginRight={4}
                  marginLeft={2}
                />

                <Text fontSize={14}>New chat</Text>
              </Box>
              <Box
                h={10}
                color="white"
                display={"flex"}
                borderRadius={4}
                paddingTop={"6px"}
                paddingLeft={4}
                margin={2}
                marginTop={5}
                className="title"
              >
                <ChatIcon fontSize={14} marginTop={"6px"} />
                <Text fontSize={14} marginTop={"3px"} marginLeft={4} over>
                  {" "}
                  Hello World Program
                </Text>
              </Box>
            </Box>

            <Box>
              <Divider />
              <Box
                h={10}
                color="white"
                display={"flex"}
                borderRadius={4}
                paddingTop={"6px"}
                paddingLeft={4}
                margin={2}
                className="title"
              >
                <StarIcon fontSize={14} marginTop={"6px"} />
                <Text fontSize={14} marginTop={"3px"} marginLeft={4} over>
                  {" "}
                  Upgrage To Plus
                </Text>
              </Box>
              <Box
                h={10}
                color="white"
                display={"flex"}
                borderRadius={4}
                paddingTop={"6px"}
                paddingLeft={4}
                margin={2}
                className="title"
              >
                <MoonIcon fontSize={14} marginTop={"6px"} />
                <Text fontSize={14} marginTop={"3px"} marginLeft={4} over>
                  {" "}
                  Dark Mode
                </Text>
              </Box>
              <Box
                h={10}
                color="white"
                display={"flex"}
                borderRadius={4}
                paddingTop={"6px"}
                paddingLeft={4}
                margin={2}
                className="title"
              >
                <ExternalLinkIcon fontSize={14} marginTop={"6px"} />
                <Text fontSize={14} marginTop={"3px"} marginLeft={4} over>
                  {" "}
                  Update & FAQ
                </Text>
              </Box>
              <Box
                h={10}
                color="white"
                display={"flex"}
                borderRadius={4}
                paddingTop={"6px"}
                paddingLeft={4}
                margin={2}
                className="title"
              >
                <UnlockIcon fontSize={14} marginTop={"6px"} />
                <Text fontSize={14} marginTop={"3px"} marginLeft={4} over>
                  {" "}
                  Log out
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              h={"100vh"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"space-between"}
            >
              {isAsked ? <HomyTwo /> : <Homyone />}

              <Box h={160} padding={4} paddingTop={8}>
                <Center as="div" position={"relative"}>
                  <Input
                    cursor={"pointer"}
                    border="1px solid #f3f3f3"
                    className={"shadow"}
                    padding={3}
                    width="90%"
                    variant="unstyled"
                    marginBottom={4}
                    autoFocus
                    onKeyDown={handleKey}
                  />
                  <Button
                    position={"absolute"}
                    right={{base:6 ,md:14}}
                    bottom={"21px"}
                    onClick={handleClick}
                  >
                    Send
                  </Button>
                </Center>
                <Text
                  align={"center"}
                  fontSize={12}
                  marginBottom="30px"
                  color={"#aaaab7"}
                >
                  <Text as="u" cursor={"pointer"}>
                    ChatGPT Feb 13 Version.
                  </Text>{" "}
                  Free Research Preview. Our goal is to make AI systems more
                  natural and safe to interact with. Your feedback will help us
                  improve.
                </Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Home;