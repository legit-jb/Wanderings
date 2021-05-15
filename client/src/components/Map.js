import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import { UserContext } from "../contexts/UserContext";

// This keeps the icons from turning invisible
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
// end invisible

const Map = () => {
  return (
    <UserContext.Consumer>
      {(context) => {
        const {
          user: { markers },
          currentTag,
        } = context;
        console.log("map: this is markers ", markers);
        let polyArray = [];
        markers.map((tag) => (polyArray = [...[markers.lat, markers.long]]));

        return (
          <MapContainer center={markers[0]} zoom={25} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((mark) => (
              <Marker key={mark.id} position={[mark.lat,mark.long]}>
                {console.log ("Map: this is mark.lat and mark.long ",mark.lat,mark.long)}
                {console.log ("Map: this is mark.lat type and mark.long type ",typeof mark.lat, typeof mark.long)}
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
            <Polyline positions={polyArray} />
          </MapContainer>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Map;
