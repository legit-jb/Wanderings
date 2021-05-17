import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import { UserContext } from "../contexts/UserContext";
import Logout from './logoutbtn'

// icons for the markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = props => {
  const {
    user: { markers },
    user: { usertags },
  } = useContext(UserContext);
  const [currentTag, setCurrentTag] = useState("ALL");

  let start = [markers[0].lat, markers[0].long];
  const polyLine = [];
  const sortedArray = [];

  // sort the markers by tag
  markers.map((mark) => {
    if (mark.tags.includes(currentTag) || currentTag === "ALL") {
      sortedArray.push(mark);
      polyLine.push([mark.lat, mark.long]);
    }
  });

  // sets center of map on first marker
  start = polyLine[0];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-nav">
        <div className="container-fluid">
          <ul className="navbar-nav nav-fill w-100">
            <li className="nav-item">
              <span className="fancy blue">Wanderings <i class="fas fa-ring"></i></span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Logout />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tags <span id="tag-name">({currentTag})</span>
              </a>
              {/* dropdown */}
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li
                  className="tag-list-item clickable"
                  value={"ALL"}
                  key={"ALL"}
                  onClick={() => {
                    setCurrentTag("ALL");
                  }}
                >
                  ALL
                </li>
                {usertags.map((tag) => (
                  <li
                    className="tag-list-item clickable"
                    value={tag}
                    key={tag}
                    onClick={(e) => {
                      setCurrentTag(tag);
                    }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {/* end dropdown */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upload" onClick={props.toggle}>
                <i className="fas fa-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <MapContainer center={start} zoom={25} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sortedArray.map((mark) => (
          <Marker
            color="#707fbc"
            key={mark.id}
            position={[mark.lat, mark.long]}
          >
            <Popup>
              <span>{mark.name}</span>
              <div className="leaflet-popup-image-com-row">
                <img src={mark.image} alt={mark.name} width="100" />
                <p>{mark.comments}</p>
                {mark.tags.map((tag) => (
                  <span
                    className="popup-tag clickable"
                    value={tag}
                    key={tag}
                    onClick={(e) => {
                      setCurrentTag(tag);
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Popup>
          </Marker>
        ))}
        <Polyline color="#707fbc" positions={polyLine} />
      </MapContainer>
    </div>
  );
};

export default Map;
