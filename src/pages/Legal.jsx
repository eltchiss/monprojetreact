import Accordions from "../components/Accordion.js";

import React from "react";
import { Helmet } from "react-helmet";


const Legal = () => {
    return(
        <div>
            {/* Empêche l’indexation */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions légales</title>
      </Helmet>
            <Accordions/>
        </div>
    )
}

export default Legal;