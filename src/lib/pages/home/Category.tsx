import { Grid, Heading, Icon } from "@chakra-ui/react";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

import { Gallery, Video } from "./components/Gallery";
import { videos } from "./store";

export function Category({ name }) {
  const items = videos[name];

  return (
    <Grid textAlign="center" gap={2}>
      <Heading
        fontSize="3xl"
        alignItems="center"
        justifyContent="center"
        display="flex"
        fontWeight="extrabold"
        as={Link}
        to={{ search: null }}
        textTransform="capitalize"
      >
        <Icon as={HiArrowSmLeft} color="white" boxSize="14" /> {name}
      </Heading>
      <Gallery>
        {items?.map((url, index) => (
          <Video key={`${name}-${index}-${url}`} src={url} />
        ))}
      </Gallery>
    </Grid>
  );
}
