import { Grid, Heading } from "@chakra-ui/react";

import { Gallery, Media } from "./Gallery";

const links = [
  [
    "forest",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "walk in the forest",
  ],
  [
    "sea",
    "https://images.unsplash.com/photo-1550522667-09c9bdb293a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "float in the sea",
  ],
  [
    "mountains",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "fly over the mountains",
  ],
  [
    "space",
    "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "travel through space",
  ],
];
const Categories = () => {
  return (
    <Grid textAlign="center" gap={2}>
      <Heading fontSize="2xl" fontWeight="extrabold">
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
  );
};

export default Categories;
