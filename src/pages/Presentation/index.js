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

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
        dark
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
      <MKBox
        minHeight="100vh"
        width="100%"
        bgColor="black"
      >
        <Container>
          <Grid container item xs={10} lg={12} justifyContent="center" mx="auto">
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
              {'Reversible is a progressive band functioning as an experimental playground of sound creation. '
              +'Their EP, Answers, aims to be an eclectic hybridization of various genre elements and styles of origins. '
              +'Textures from 70s rock and the best of contemporary progressive rock, jazz, ambient and spatial sounds, '
              +'electronic, drum and bass, and even ethnic music join together without prejudice in our proposal.'} 
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
              {'As such, the listener will notice details uncovering the intentions of the band, totally atypical in the present cuban musical landscape. '
              +'This feeling of collage, experimentation, and richness in the use of multiple sounds are enhanced by a wide array of colors and virtues '
              +'in the motivations and origins of each participating musician (Marco Alonso, William Pacheco, Sandor Rain-Hill, Jose Bermudez, and Jose Machado) '
              +'— this is exactly what contributes to the classification of Reversible’s proposal under the category of progressive music.'} 
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
              {'In Reversible’s recordings for their first work attention is drawn to the use of jazzy bases, with keyboards and synthesizers '
              +'in which textures from the 70s are predominant and progressive sounds interact in perfect communion with those of classical upright pianos. '
              +'At the same time, one can appreciate experimental flirtation and acidic touch of the guitars that manage to go beyond a conventional rock discourse. '
              +'The drums, always far from compressions popular today, produce a natural sound with occasional processing through various effects '
              +'that aim to convert them into another melodic instrument. The coming together of electronic instruments with acoustic ones like the saxophone, contrabass, and piano '
              +'creates an atmosphere open to the assimilation of multiple influences which breaks formulaic schematism. '
              +'This culminates with the accomplishment that when listening to the disk Walking Blind one receives it as a contemporary and modern work '
              +'that is at the same time characterized by warm, vintage sounds.'} 
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
              {'Reversible’s intentions, however, don’t stop there. Conceptually it can be said that, given the breathable spirituality throughout the 10 pieces in the album '
              +'— produced by Marco Alonso and William Pacheco — there also is an approximation to world music, if perceived in the broadest of terms. '
              +'In parallel, the spirituality of the disk makes it a psychedelic journey, a sort of dream or trance, with a transcendental and all-encompassing '
              +'cosmic vision of life beyond death, all associated with the nocturnal and bohemian. Therein lies another reason for the variety of textures, '
              +'environmental and psychedelic charge transmitted by the phonogram as a whole. If you are music lover open to enjoying proposals that break with the conventional '
              +'tight compartments, I assure you that Walking Blind as the first work of Reversible, a disk that looks to expand the existing stylistic limits of specific musical genres, will not disappoint.'} 
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Presentation;
