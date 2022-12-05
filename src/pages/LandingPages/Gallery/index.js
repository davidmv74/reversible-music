// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import ImageCard from "examples/Cards/BlogCards/ImageCard";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Gallery() {
  const driveImageIDs = [
    "15PJPfzzmptBf_j_8GHkb5bfs9msTKDcp",
    "185hKti02Eth-QbBxfPvFPo2FIuBT7Wzy",
    "1nA-hlay8gO4N6qI1LuiN1DuK-_bcRnKw",
    "173Li9Q0vwP0yZnQzkwID7mC1Xj9KfAB-",
    "16vorSqgYUOA8hYCS5jLF_ojBsQr60_yi",
    "16n3vR4tBhXyDWNe8dxK4cbUZW0oGAewP",
    "16gDJEJ4AOgVkjn27UWjJ2F2bskl7d0O9",
    "1zLfo26JW4Xzp7-VxIolE2kg4rwgAxX-M",
    "1iJSlTLMOvpar-Z6LXQAN_aAhrhzNAvDB"
  ];
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="100vh"
        width="100%"
        pt={"8%"}
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            {driveImageIDs.map((imageID) => {
              return (
                <Grid item xs={12} lg={4}>
                  <ImageCard
                    image={
                      "https://drive.google.com/uc?export=view&id=" + imageID
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Gallery;
