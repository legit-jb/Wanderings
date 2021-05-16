import React, { useEffect, useState, useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L, { marker } from "leaflet";
import { UserContext } from "../contexts/UserContext";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = () => {
  const {
    currentTag,
    user: { markers },
  } = useContext(UserContext);
  const [markerArray, setMarkerArray] = useState([]);

  console.log("Map: these are markers ", markers);
  console.log("Map: this is current tag state ", currentTag);

  // filter the markers by tag
  const popMarkers = () => {
    markers.map((mark) => {
      if (mark.tags.includes(currentTag, start)) {
        setMarkerArray([...markerArray, ...mark]);
        console.log("Map: marker Array filter", markerArray);
      }
    });
    // end markers map filter
  };
  const start = [markers[0].lat, markers[0].long];

  return (
    <MapContainer center={start} zoom={25} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerArray.map((mark) => (
        <Marker key={mark.id} position={[mark.lat, mark.long]}>
          <Popup>
            <span>{mark.name}</span>
            <div className="leaflet-popup-image-com-row">
              <img src={mark.image} alt={mark.name} width="100" />
              <p>{mark.comments}</p>
              {/* <span>{mark.tags}</span> */}
            </div>
          </Popup>
        </Marker>
      ))}
      {/* <Polyline positions={tagsArray} /> */}
    </MapContainer>
  );
  // end of Map function return
      
};
// end of Map function

export default Map;
