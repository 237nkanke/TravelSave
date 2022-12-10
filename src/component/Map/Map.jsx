import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutLinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";
//Paper is just a div with a background
const Map = ({ setcoordinates, setbounds, coordinates, places, setChildCliked }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:760px)");
  
  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA8_OweKxP5cnU6XBzMZZfxNLlucKM9v5c" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e) => {
          setcoordinates({ lat: e.center.lat, lng: e.center.lng });

          setbounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildCliked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {
              !isDesktop ? (<LocationOnOutLinedIcon  color="primary" fontSize="large"/>) : 
              (<Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="subtitle2" getterBottom>
                  {place.name}
                </Typography>
                <img 
                className={classes.pointer}
                src={place.photo ? place.photo.images.large.url : "a.jpg"}
                alt={place.name}
                 />
                 <Rating size="small" value={Number(place.rating)} readOnly/>
                </Paper>)
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};
// elevation gives some box shadow
export default Map;
