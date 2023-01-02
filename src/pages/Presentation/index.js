// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/reversible-main.jpg";

import { aboutText } from "assets/text";

import { useState } from "react";

function Presentation() {
  const [isEnglish, setIsEnglish] = useState(true);
  console.log(isEnglish);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
        dark
        toggleLanguage={() => setIsEnglish(!isEnglish)}
      />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt="15%"
              mb="85%"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Reversible Music
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <MKBox minHeight="100vh" width="100%" bgColor="black">
        <Container>
          <Grid
            container
            item
            xs={10}
            lg={12}
            justifyContent="center"
            mx="auto"
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              color="light"
              mt={"8%"}
              mb={4}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {aboutText[0][isEnglish ? "english" : "spanish"]}
            </MKTypography>

            <MKTypography
              variant="p"
              fontWeight="medium"
              color="light"
              mb={4}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {aboutText[1][isEnglish ? "english" : "spanish"]}
            </MKTypography>
            <MKTypography
              variant="p"
              fontWeight="medium"
              color="light"
              mb={4}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {aboutText[2][isEnglish ? "english" : "spanish"]}
            </MKTypography>
            <MKTypography
              variant="p"
              fontWeight="medium"
              color="light"
              mb={4}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {aboutText[3][isEnglish ? "english" : "spanish"]}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Presentation;
