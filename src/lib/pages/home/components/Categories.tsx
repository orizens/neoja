import { Grid, Heading, Icon } from "@chakra-ui/react";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link, useSearchParams } from "react-router-dom";

import { Category } from "../Category";
import { links } from "../store";

import { Gallery, Media } from "./Gallery";

const CategoryRenderer = ({ children }) => {
  const [search] = useSearchParams();
  const category = search.get("category");
  const hasCategory = Boolean(category);

  return hasCategory ? <Category name={category} /> : children;
};
const Categories = () => {
  return (
    <CategoryRenderer>
      <Grid textAlign="center" gap={2}>
        <Heading
          fontSize="2xl"
          fontWeight="extrabold"
          display="flex"
          alignItems="center"
          justifyContent="center"
          as={Link}
          to="/"
        >
          <Icon as={HiArrowSmLeft} color="white" boxSize="14" />
          Meditations Library
        </Heading>
        <Gallery>
          {links.map(([header, src, description]) => (
            <Media key={src} src={src} description={description} to={header}>
              {header}
            </Media>
          ))}
        </Gallery>
      </Grid>
    </CategoryRenderer>
  );
};

export default Categories;
