import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
//cardmedia is for the image
import useStyles from "./styles";
const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if(selected) refProp?.current?.scrollIntoView({behavior: 'smoot', block:'start'})
  return (
    // the elevation is going to give it a nice shadow effect
    //getterBottom means giving some extra margin at the botttom
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : "a.jpg"}
        title={place.name}
      />
      <CardContent>
        <Typography getterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
        <Rating  value={Number(place.rating)} readOnly/>
          <Typography getterBottom variant="subtitel">
          Out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography getterBottom variant="subtitel">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography getterBottom variant="subtitel">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            my="1"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            getterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            getterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon />{place.phone}
          </Typography>
        )}
        <CardActions>
<Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')}>Trip Advisor</Button>
<Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>Website</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
