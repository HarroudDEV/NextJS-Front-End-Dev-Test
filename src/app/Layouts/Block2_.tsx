"use client";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  const rtl = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
    isMobile
      ? ["-10%", "-20%", "-30%", "-40%", "-50%", "-60%", "-70%"]
      : ["50%", "-50%", "-110%", "-120%", "-130%", "-150%", "-200%"]
  );
  const ltr = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 1],
    isMobile
      ? ["5%", "10%", "15%", "20%", "25%"]
      : ["-50%", "-50%", "30%", "50%", "70%"]
  );

  const transformRTL = useSpring(rtl, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });
  const transformLTR = useSpring(ltr, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  return (
    <Box
      ref={ref}
      component={"section"}
      sx={{
        position: "relative",
        height: { xs: "85dvh", sm: "85dvh", md: "100dvh", lg: "100dvh" },
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(180deg, #EAF3FA 18%, #FFFFFF 100%)",
      }}
    >
      <Container>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid size={12}>
            <Typography
              fontSize={{ xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" }}
              textAlign={"center"}
            >
              <span style={{ display: "block" }}>Private</span>
              <span style={{ display: "block" }}>Charter</span>
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography
              fontSize={{
                xs: "1rem",
                sm: "1.2rem",
                md: "1.3rem",
                lg: "1.4rem",
              }}
              textAlign={"center"}
              color={"#5E6B7A"}
            >
              nge direct air charter with tailored routing, aircraft selection,
              and full operational oversight. Every flight is managed with
              speed, reliability, and discretion.
            </Typography>
          </Grid>
          <Grid size={12} sx={{ display: "grid" }} justifyContent={"center"}>
            <Button
              sx={{
                background: "blue",
                color: "#FFFF",
                padding: "1rem 1.8rem",
                backgroundImage:
                  "linear-gradient(19deg, #153D71 22%, #245597 100%)",
              }}
            >
              Discover more
            </Button>
          </Grid>
          <Grid size={12} sx={{ display: "grid" }} justifyContent={"center"}>
            <img
              src="https://jets.partners/wp-content/uploads/2024/07/Fichier-29.png"
              alt=""
              style={{ maxWidth: "3rem" }}
            />
          </Grid>
        </Grid>
        <motion.div
          style={{
            position: "absolute",
            top: "40%",
            width: "50%",
            left: "50%",
            x: transformLTR,
          }}
        >
          <img
            src="https://jets.partners/wp-content/uploads/2025/08/gddgd.png"
            alt=""
            srcSet="https://jets.partners/wp-content/uploads/2025/08/gddgd.png"
            width={"100%"}
          />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            top: "20%",
            width: "30%",
            borderRadius: "4%",
            left: "50%",
            x: transformRTL,
            rotate: -10,
          }}
        >
          <img
            src="https://jets.partners/wp-content/uploads/2025/07/service1-1.jpg"
            alt=""
            srcSet="https://jets.partners/wp-content/uploads/2025/07/service1-1.jpg"
            width={"100%"}
            style={{ borderRadius: "4%" }}
          />
        </motion.div>
      </Container>
    </Box>
  );
}
