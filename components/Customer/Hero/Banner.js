import React from "react";
import { Paper, Button, Container, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

function Banner() {
  const matches900 = useMediaQuery("(max-width: 900px)");
  const matches768 = useMediaQuery("(max-width: 768px)");

  return (
    <Container size={"xl"} pt={60} hidden={matches768} pb={60}>
      <Paper
        style={{
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
        mx={"lg"}
        radius={0}
        bg={"#457d1a"}
      >
        <Paper
          style={{
            width: "30%",
            textAlign: "center",
            height: "100%",
            zIndex: 1000,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
          }}
          bg={"#232323"}
          radius={0}
        >
          <span
            style={{
              fontSize: matches900 ? 18 : 28,
              color: "#fff",
              fontWeight: 525,
              paddingLeft: 20,
            }}
          >
            Black Friday Sale!
          </span>
        </Paper>
        <div
          style={{
            width: "60%",
            display: "inline-block",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              whiteSpace: "nowrap",
              animation: "move-text 25s linear infinite",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "white",
                fontWeight: 525,
                fontStyle: "italic",
              }}
            >
              Buy your favorite plant from our store and get a chance to win a
              free gift
            </Text>
          </div>
        </div>
        <Paper
          style={{
            width: "15%",
            textAlign: "center",
            height: "100%",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          bg={"#232323"}
        >
          <Link href={"/customer/products"}>
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#000",
              }}
              radius={0}
              compact={matches900}
            >
              Shop Now
            </Button>
          </Link>
        </Paper>
        <style>
          {`
          @keyframes move-text {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          `}
        </style>
      </Paper>
    </Container>
  );
}

export default Banner;
