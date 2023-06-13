import { Grid, Heading, Icon } from "@chakra-ui/react";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";

import { Gallery, Video } from "./components/Gallery";

export function Category({ name }) {
  const data = useLoaderData();
  const items = data?.[name];

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
        {items?.map((url: any, index: any) => (
          <Video key={`${name}-${index}-${url}`} src={url} />
        ))}
      </Gallery>
    </Grid>
  );
}
