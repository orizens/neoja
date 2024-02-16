import { Button, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// setTimeout(() => {
//   document.body.requestFullscreen();
// }, 500)

const Home = () => {

  return (
    <Grid gap={4}
    as={Link}
        to="/categories"
    >
      <Grid textAlign="center" gap={4}>
        <Heading fontSize="9xl">akto</Heading>
        <Grid opacity=".5">
          <Heading>Mind the break</Heading>
          <Heading>akto.com</Heading>
        </Grid>
        <Text
          fontSize="4xl"
          color="white"
          textDecoration="underline"
        >
          Touch to start your break
        </Text>
      </Grid>
    </Grid>
  );
};

export default Home;
