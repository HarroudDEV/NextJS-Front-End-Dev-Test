import { Box, Container, Typography } from "@mui/material";

export default function App() {
  return (
    <Box
      component={"section"}
      sx={{
        display: "grid",
        height: "90dvh",
        justifyContent: "center",
        alignItems: "center",
        background:
          "url(https://jets.partners/wp-content/uploads/2024/07/ndnddn.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        "@media (max-width:600px)": {
          maxHeight: "20rem",
        },
      }}
    >
      <Container>
        <Typography
          textAlign={"center"}
          sx={{
            fontSize: { xs: "10vw", sm: "10vw", md: "8vw", lg: "8vw" },
            color: "transparent",
            background: "linear-gradient(140deg, #FFFFFF 20%, #064BA6 94%)",
            backgroundClip: "text",
          }}
        >
          AREAS OF EXPERTISE
        </Typography>
      </Container>
    </Box>
  );
}
