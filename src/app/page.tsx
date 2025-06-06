"use client";
import { useEffect } from "react";
import { Button, HStack, VStack, Box } from "@chakra-ui/react";

export default function Home() {
  useEffect(() => {
    const text = document.querySelector(".text");
    if (text) {
      text.classList.add("is-active");
      const interval = setInterval(() => {
        text.classList.toggle("is-active");
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <VStack maxW="800px" w="100%" mx="auto" textStyle="md" fontWeight="normal">
      <Box
        bg="gray"
        w="100%"
        p="4"
        color="white"
        textStyle="2xl"
        fontWeight="semibold"
      >
        IK Studio
      </Box>
    </VStack>
  );
}
