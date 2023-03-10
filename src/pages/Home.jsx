import React, { useContext, useEffect, useState } from "react";
import Form from "../componants/Form";

import { Grid, GridItem, Box, Text, Divider } from "@chakra-ui/react";
import {
  AddIcon,
  ChatIcon,
  ExternalLinkIcon,
  MoonIcon,
  StarIcon,
  UnlockIcon,
} from "@chakra-ui/icons";

import Homyone from "../componants/Homyone";
import HomyTwo from "../componants/HomyTwo";
import { ApiContext } from "../context/ApiProvider";

function Home() {
  const { allMessages } = useContext(ApiContext);
  const [isMessages, setIsMessages] = useState(false);

  useEffect(() => {
    if (allMessages.length > 0) {
      setIsMessages(true);
    }
  }, [allMessages]);

  return (
    <>
      <Box>
        <Grid display={"flex"} h="100vh">
          <GridItem
            bg="#202123"
            minW={260}
            display={{ base: "none", md: "flex" }}
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
                <Text fontSize={14} marginTop={"3px"} marginLeft={4}>
                  {" "}
                  Hello World
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
                <Text fontSize={14} marginTop={"3px"} marginLeft={4}>
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
                <Text fontSize={14} marginTop={"3px"} marginLeft={4}>
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
                <Text fontSize={14} marginTop={"3px"} marginLeft={4}>
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
                <Text fontSize={14} marginTop={"3px"} marginLeft={4}>
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
              {isMessages ? <HomyTwo /> : <Homyone />}
              {/* <HomyTwo /> */}

              <Form />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
