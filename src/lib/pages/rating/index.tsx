import { Button, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Ratings from "./Ratings";

// setTimeout(() => {
//   document.body.requestFullscreen();
// }, 500)

const Rating = () => {
  const [searchParams] = useSearchParams();
  const rating = useRef<any>();
  const category = searchParams.get('category');
  const file = searchParams.get('file');
  const navigate = useNavigate();
  console.log(searchParams)
  useEffect(() => {
    let timer = setTimeout(() => {
      debugger
      if (rating) {
        writeRatingStorage(category, file, rating.current);
      }
      navigate('/')
    }, 10 * 1000)
    return (() => {
      clearTimeout(timer);
    })
  }, []);

  return (
    <Grid gap={4}
    >
      <Grid textAlign="center" gap={4}>
        <Heading fontSize="5xl" color="gray.700" >How was your experience?</Heading>
        <Grid opacity=".5">
          <Ratings
          size={62}
          onChange={(value: any) => {
            rating.current = value;
          }}
          onDone={() => {
            if (rating?.current) {
              writeRatingStorage(category, file, rating.current);
            }
            navigate('/')
          }}
          scale={5}
          fillColor="gold"
          strokeColor="grey"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Rating;

const writeRatingStorage = (category, file, rating: number) => {
  const aktoStorage = localStorage.getItem('aktoRatings');
  const result = aktoStorage ? JSON.parse(aktoStorage as any) : {};
  if (!result[category]) {
    result[category] = {};
  }
  if (!result[category][file]){
    result[category][file] = [rating];
  } else {
    result[category][file] = [...result[category][file], rating];
  }
  localStorage.setItem(
    'aktoRatings',
    JSON.stringify(result)
  );
}