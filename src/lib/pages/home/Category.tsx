import { Grid, Heading, Icon } from "@chakra-ui/react";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

import { Gallery, Video } from "./components/Gallery";

const videos = {
  forest: [
    "https://media.istockphoto.com/id/1348234011/video/tree-park-forest-fog-sun-magical-nature-mist-morning-leaf.mp4?s=mp4-640x640-is&k=20&c=qpB3652YGUxrwmeUiq0DUXjzuS3SPXAkvNpFCTcvFgw=",
    "https://media.istockphoto.com/id/1348234011/video/tree-park-forest-fog-sun-magical-nature-mist-morning-leaf.mp4?s=mp4-640x640-is&k=20&c=qpB3652YGUxrwmeUiq0DUXjzuS3SPXAkvNpFCTcvFgw=",
    "https://media.istockphoto.com/id/1348234011/video/tree-park-forest-fog-sun-magical-nature-mist-morning-leaf.mp4?s=mp4-640x640-is&k=20&c=qpB3652YGUxrwmeUiq0DUXjzuS3SPXAkvNpFCTcvFgw=",
    "https://media.istockphoto.com/id/1348234011/video/tree-park-forest-fog-sun-magical-nature-mist-morning-leaf.mp4?s=mp4-640x640-is&k=20&c=qpB3652YGUxrwmeUiq0DUXjzuS3SPXAkvNpFCTcvFgw=",
    "https://media.istockphoto.com/id/1348234011/video/tree-park-forest-fog-sun-magical-nature-mist-morning-leaf.mp4?s=mp4-640x640-is&k=20&c=qpB3652YGUxrwmeUiq0DUXjzuS3SPXAkvNpFCTcvFgw=",
    "https://media.istockphoto.com/id/1348234011/video/tree-park-forest-fog-sun-magical-nature-mist-morning-leaf.mp4?s=mp4-640x640-is&k=20&c=qpB3652YGUxrwmeUiq0DUXjzuS3SPXAkvNpFCTcvFgw=",
    "https://media.istockphoto.com/id/1348234011/video/tree-park-forest-fog-sun-magical-nature-mist-morning-leaf.mp4?s=mp4-640x640-is&k=20&c=qpB3652YGUxrwmeUiq0DUXjzuS3SPXAkvNpFCTcvFgw=",
    "https://media.istockphoto.com/id/1348234011/video/tree-park-forest-fog-sun-magical-nature-mist-morning-leaf.mp4?s=mp4-640x640-is&k=20&c=qpB3652YGUxrwmeUiq0DUXjzuS3SPXAkvNpFCTcvFgw=",
  ],
  sea: [
    "https://media.istockphoto.com/id/1255754954/video/school-of-fish-sharks-swim-in-a-circle.mp4?s=mp4-640x640-is&k=20&c=YqOEIjdlfaofiSnAwTszq021DXQvTb2p-hNia4dZtxA=",
  ],
  mountains: [
    "https://media.istockphoto.com/id/1049349248/video/aerial-view-of-mountains-in-fog-switzerland.mp4?s=mp4-640x640-is&k=20&c=OzkJ4KcX3RU3pGHuUm8wixuqaQsNzqXwfwxh6Ch5n_k=",
  ],
  space: [
    "https://media.istockphoto.com/id/1403817732/video/flying-away-from-the-nebula.mp4?s=mp4-640x640-is&k=20&c=F3t7sICKpN5oeGI4Q1nrMUrwPHD84BNQ2k9tn-4JBxw=",
  ],
};

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
      >
        <Icon as={HiArrowSmLeft} color="white" /> {name}
      </Heading>
      <Gallery>
        {items.map((url, index) => (
          <Video key={`${name}-${index}-${url}`} src={url} />
        ))}
      </Gallery>
    </Grid>
  );
}
