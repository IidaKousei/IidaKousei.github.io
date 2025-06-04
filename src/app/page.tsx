"use client";
import { useEffect } from "react";
import { Button, HStack, VStack } from "@chakra-ui/react";

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
    <VStack maxW="800px" w="100%" mx="auto" p={4}>
      Hello World!
    </VStack>
  );
}
