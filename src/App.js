import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";
import getPlasceData from "./api";

import { CssBaseline, Grid } from "@material-ui/core";
// cssBaseLine is a material ui that simply normalises some styles like margin paddings for us
function App() {
  const [places, setplaces] = useState([]);
  const [childClicked, setChildCliked] = useState(null);
  const [coordinates, setcoordinates] = useState({});
  const [bounds, setbounds] = useState({s:{lat: 3.8463174474788957,lng: 11.511612359619136} , ne:{lat: 3.884682118587804,lng: 11.556587640380855}});
  const [isLoading, setLoading] = useState(false);
// const [filteredPlaces,setFilteredPlaces] = useState([])
  const [type, settype] = useState("restaurants");
  const [rating, setrating] = useState("");

  console.log(bounds)
  console.log(bounds);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setcoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

//   useEffect(() => {
//  const filteredPlaces = places.filter((place) => place.rating > rating)
//  setFilteredPlaces(filteredPlaces)
//   },[rating])

  useEffect(() => {
    setLoading(true);
    getPlasceData(type,bounds.sw, bounds.ne).then((data) => {
      setplaces(data);
      // setFilteredPlaces([])
      setLoading(false);
    });
  }, [type,coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header setcoordinates={setcoordinates}/>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            // places={filteredPlaces.length ? filteredPlaces : places}
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            settype={settype}
            rating={rating}
             setrating={setrating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            // places={filteredPlaces.length ? filteredPlaces : places}
            places={places}
            setcoordinates={setcoordinates}
            setbounds={setbounds}
            coordinates={coordinates}
            setChildCliked={setChildCliked}
          />
        </Grid>
        {/* xs={12} means that the width is going to take fool width on mobile devices, md(meduim and larger)
amhole screen grid id divided into 12 spaces */}
      </Grid>
    </>
  );
}

export default App;
