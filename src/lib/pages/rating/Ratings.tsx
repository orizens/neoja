import React, { useState } from "react";
import { Box, Button, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Ratings = React.forwardRef(
  ({ size, scale, fillColor, strokeColor, onChange, onDone }: any, ref) => {
    const [rating, setRating] = useState(0);
    const buttons = [];

    const onClick = idx => {
      if (!isNaN(idx)) {
        // allow user to click first icon and set rating to zero if rating is already 1
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
        onChange(idx)
      }
    };

    const RatingIcon = ({ fill }) => {
      return (
        <Icon
          as={StarIcon}
          boxSize={`${size}px`}
          color={fillColor}
          stroke={strokeColor}
          onClick={onClick}
          fillOpacity={fill ? "100%" : "0"}
        />
      );
    };

    const RatingButton = ({ idx, fill }) => {
      return (
        <Box
          as="button"
          aria-label={`Rate ${idx}`}
          height={`${size}px`}
          width={`${size}px`}
          // variant="unstyled"
          mx={1}
          onClick={() => onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </Box>
      );
    };

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return (
      <Grid justifyItems='center' gap='4'>
      <Stack isInline mt={8} justify="center">
        <input name="rating" type="hidden" value={rating} ref={ref as any} />
        {buttons}
      </Stack>
      <Flex gap='4'>
        <Button as={Link} to='/' width='max-content'>Start Over</Button>
        <Button width='max-content' onClick={() => onDone()}>Done</Button>
      </Flex>
      </Grid>
    );
  }
);

export default Ratings;
