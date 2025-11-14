"use client";

import { Grid, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { div } from "framer-motion/client";

export default function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [scrolling, setScrolling] = useState<number>(0);
  function scrollHandler() {
    const { scrollY } = window;
    setScrolling(scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <>
      <nav>
        <Grid
          container
          spacing={1}
          sx={{
            position: "fixed",
            top: 0,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            color: "white",
            background: scrolling > 0 ? "rgb(0 30 57 / 35%)" : "transparent",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            padding: "0rem 1rem",
            "& > div": {
              cursor: "pointer",
            },
          }}
        >
          {(isMobile && (
            <Grid sx={{ marginLeft: "auto" }}>
              <MenuIcon fontSize="large" />
            </Grid>
          )) || (
            <>
              <Grid>
                <a href="">
                  <img
                    style={{ maxWidth: "3.5rem" }}
                    src="https://jets.partners/wp-content/uploads/2025/08/hgffh.png"
                    alt=""
                  />
                </a>
              </Grid>
              <Grid>
                <a href=""></a>Home
              </Grid>
              <Grid>
                <a>Services</a>
              </Grid>
              <Grid>
                <a>Empty Legs</a>
              </Grid>
              <Grid>
                <a>Sales & Acquisitions</a>
              </Grid>
              <Grid>
                <a>Fleet</a>
              </Grid>
              <Grid>
                <a>About</a>
              </Grid>
              <Grid>
                <a>Blog</a>
              </Grid>
              <Grid>
                <a>Careers</a>
              </Grid>
            </>
          )}
        </Grid>
      </nav>
    </>
  );
}
