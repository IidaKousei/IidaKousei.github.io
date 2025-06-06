"use client";
import { useEffect } from "react";
import { Button, HStack, VStack, Box } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
// デフォルトのテーマ
import "@splidejs/react-splide/css";

// または、ほかのテーマ
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// あるいは、コアスタイルのみ
import "@splidejs/react-splide/css/core";

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
      <Splide
        options={{
          type: "loop",
          speed: 1000,
          perPage: 2,
          perMove: 1,
          autoplay: true,
          interval: 8000,
          pagination: true,
          arrows: true,
          width: "100%",
          gap: "1rem",

        }}
      >
        <SplideSlide>
          <Image
            src="https://picsum.photos/1000/400"
            alt="画像"
            width={1000}
            height={400}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="https://picsum.photos/1000/400"
            alt="画像"
            width={1000}
            height={400}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="https://picsum.photos/1000/400"
            alt="画像"
            width={1000}
            height={400}
          />
        </SplideSlide>
      </Splide>
    </VStack>
  );
}
