import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function App() {
  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: "#020D26",
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
            <img
              src="https://jets.partners/wp-content/uploads/2025/08/Fichier-30-2.png"
              alt=""
              style={{ maxWidth: "10rem" }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
            <Typography color="#CBD5E3CC">
              Experience isn’t claimed — it’s proven. At Jets & Partners, we’ve
              assembled a handpicked team of private aviation top performers who
              consistently rise above the rest. Their experience runs deep,
              their connections branch out, and their commitment to results is
              relentless.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
            <Typography color="#CBD5E3CC">
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  color: "white",
                }}
              >
                Office
              </span>{" "}
              <br />
              <br />
              15442 Ventura Blvd, Sherman Oaks, CA 91403 <br />
              <br />
              +1 973 932 8950 +1 407 528 1226 <br />
              <br />
              <a
                href="mailto:"
                style={{ textDecoration: "none", color: "#CBD5E3CC" }}
              >
                HELLO@JETS.PARTNERS
              </a>
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
            <Typography color="#CBD5E3CC">
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  color: "white",
                }}
              >
                Office
              </span>{" "}
              <br />
              <br />
              15442 Ventura Blvd, Sherman Oaks, CA 91403 <br />
              <br />
              +1 973 932 8950 +1 407 528 1226 <br />
              <br />
              <a
                href="mailto:"
                style={{ textDecoration: "none", color: "#CBD5E3CC" }}
              >
                HELLO@JETS.PARTNERS
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
