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

// icons for the markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = () => {
  const {
    user: { markers },
    user: { usertags },
  } = useContext(UserContext);
  const [currentTag, setCurrentTag] = useState("all");

  let start = [markers[0].lat, markers[0].long];
  const polyLine = [];
  const sortedArray = [];

  // sort the markers by tag
  markers.map((mark) => {
    if (mark.tags.includes(currentTag) || currentTag === "all") {
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
              <a
                className="nav-link active nav-item dropdown dropdown-toggle"
                aria-current="page"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bars"></i>
              </a>
              <ul
                className="dropdown-menu bg-secondary p-2"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className="dropdown-item border-bottom border-dark p-2"
                    href="#"
                  >
                    account
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item border-bottom border-dark p-2"
                    href="#"
                  >
                    stats
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Score
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
                Tags
              </a>
              {/* dropdown */}
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {usertags.map((tag) => (
                  <li
                    className="tag-list-item clickable"
                    value={tag}
                    key={tag}
                    onClick={(e) => {
                      setCurrentTag(tag);
                      console.log(
                        "TagsDropdown: this is the clicked value ",
                        e.target.value
                      );
                    }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {/* end dropdown */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upload">
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
          <Marker key={mark.id} position={[mark.lat, mark.long]}>
            {console.log("Map: this is the full marker being mapped ", mark)}
            {console.log("Map: this is the marker coords ", [
              mark.lat,
              mark.long,
            ])}
            <Popup>
              <span>{mark.name}</span>
              <div className="leaflet-popup-image-com-row">
                <img src={mark.image} alt={mark.name} width="100" />
                <p>{mark.comments}</p>
                <span>{mark.tags}</span>
              </div>
            </Popup>
          </Marker>
        ))}
        <Polyline positions={polyLine} />
      </MapContainer>
    </div>
  );
};

export default Map;
