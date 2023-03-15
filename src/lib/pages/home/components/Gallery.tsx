import {
  Card,
  Image,
  CardBody,
  Grid,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export function Gallery({ children, ...props }) {
  return (
    <Grid
      justifyContent="center"
      gridTemplateColumns={["1fr", "repeat(2, auto)"]}
      justifyItems="center"
      gridGap="6"
      {...props}
    >
      {children}
    </Grid>
  );
}
export function Media({ src, description, to, children }) {
  return (
    <Card maxW="sm" as={Link} to={{ search: `category=${to}` }}>
      <CardBody>
        <Image src={src} h="56" alt={to} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{children}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export function Video({ src }) {
  const videoRef = useRef<HTMLVideoElement>();
  const play = async () => {
    await videoRef.current.requestFullscreen();
    videoRef.current.play();
  };

  return (
    <Card maxW="sm" onClick={play} as={Button} h="auto">
      <CardBody>
        <video ref={videoRef} src={src} width="full" loop />
        <Stack mt="6" spacing="3">
          <Heading size="md">some heading</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}