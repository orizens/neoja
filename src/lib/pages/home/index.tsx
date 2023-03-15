import { Grid } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

import { Category } from "./Category";
import Categories from "./components/Categories";

const Home = () => {
  const [search] = useSearchParams();
  const category = search.get("category");
  const hasCategory = Boolean(category);

  return (
    <Grid gap={4}>
      {hasCategory ? <Category name={category} /> : <Categories />}
    </Grid>
  );
};

export default Home;
