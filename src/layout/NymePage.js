import React, { useEffect } from "react";
import NymeContainer from "./NymeContainer";

function NymePage(props) {
  useEffect(() => {
    document.title = props.title ?? "Nyme";

    if (props.scroll !== null && props.scroll !== undefined && props.scroll === true) {
      window.scrollTo(0, 0);
    }
  }, [props.title, props.scroll]);

  return <NymeContainer>{props.children}</NymeContainer>;
}

export default NymePage;
