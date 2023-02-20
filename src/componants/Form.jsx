import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { ApiContext } from "../context/ApiProvider";
import { Configuration, OpenAIApi } from "openai";

function Form() {
  const { message, setMessage, setAllMessages, allMessages } =
    useContext(ApiContext);

  const getRes = async () => {
    if (message && message.length > 0) {
      const configuration = new Configuration({
        organization: "org-hGs4tZBO2p7ktqxJ9OBXZfl4",
        apiKey: process.env.VITE_KEY,
      });

      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 100,
        temperature: 0.9,
      });
      console.log(response.data.choices[0].text);

      setAllMessages((prev) => [
        ...prev,
        {
          message: response.data.choices[0].text,
          type: "bot",
          time: "12:00",
        },
      ]);
    } else {
      setAllMessages((prev) => [
        ...prev,
        {
          message: "sorry, I didn't get that",
          type: "bot",
          time: "12:00",
        },
      ]);
    }
  };

  const handleClick = async () => {
    if (!message) return;

    setAllMessages((prev) => [
      ...prev,
      {
        message: message,
        type: "man",
        time: "12:00",
      },
    ]);
    setMessage("");
    await getRes();
    console.log(
      allMessages.map((message) => {
        return message.message;
      })
    );
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
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
          value={message}
          onKeyDown={handleKeyDown}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          position={"absolute"}
          right={{ base: 6, md: 14 }}
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
        Free Research Preview. Our goal is to make AI systems more natural and
        safe to interact with. Your feedback will help us improve.
      </Text>
    </Box>
  );
}

export default Form;
