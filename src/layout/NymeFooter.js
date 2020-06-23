import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Classes from "./NymeStyle";

function NymeFooter(props) {
  return (
    <footer className={Classes().footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link to="/"> Ganymede </Link>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  );
}

export default NymeFooter;
