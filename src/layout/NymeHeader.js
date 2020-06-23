import React from "react";

//Material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HeaderIcon from "@material-ui/icons/Alarm";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Classes from "./NymeStyle";

function NymeHeader(props) {
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <HeaderIcon className={Classes().icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Nyme
        </Typography>
        <Tabs value={tab} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Info" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NymeHeader;
