import React from "react";
import cl from "./Offer.module.scss";
import { FaSquareInstagram, FaSquareFacebook, FaGlobe } from "react-icons/fa6";

export default function SocialNetworks({ item }) {
  const network = item.networks;

  return (
    <ul className={cl.links}>
      <li className={network.facebook === "" ? cl.hidden : cl.visible}>
        <a href={network.facebook} target="_blank" rel="noopener noreferrer">
          <FaSquareFacebook className={cl.iconLink} />
        </a>
      </li>

      <li className={network.instagram === "" ? cl.hidden : cl.visible}>
        <a href={network.instagram} target="_blank" rel="noopener noreferrer">
          <FaSquareInstagram className={cl.iconLink} />
        </a>
      </li>

      <li className={network.website === "" ? cl.hidden : cl.visible}>
        <a href={network.website} target="_blank" rel="noopener noreferrer">
          <FaGlobe
            className={cl.iconLink}
            style={{ width: "36px", height: "36px" }}
          />
        </a>
      </li>
    </ul>
  );
}
