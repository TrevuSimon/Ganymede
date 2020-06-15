import React from "react";

//Material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HeaderIcon from "@material-ui/icons/Alarm";
import Typography from "@material-ui/core/Typography";
import Classes from "./NymeStyle";

function NymeHeader(props) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <HeaderIcon className={Classes().icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Nyme
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NymeHeader;
