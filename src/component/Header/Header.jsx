import React ,{useState} from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'

// typography is simply every single text element and you can change the variant top h1 h2 h3 h3 title subtitles
//in material ui a box is simply a div
const Header = (setcoordinates) => {
    const classes = useStyles();

    const [autocomplete,setAutocomplete] = useState(null)

    const onLoad = (autoC) => setAutocomplete(autoC)
    const onPlaceChanged = () => {
      const lat= autocomplete.getPlace().geometry.location.lat();
      const lng= autocomplete.getPlace().geometry.location.lng();

      setcoordinates({lat,lng});
    }
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Save
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore New Horizon
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase placeholder="search..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
