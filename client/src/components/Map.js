import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = (props) => {
  const start = [props.markers[0].lat, props.markers[0].long];
  return (
    <MapContainer
      style={{ height: "500px", width:"80%", backgroundColor: "#dce2f2" }}
      center={start}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.markers.map((mark) => (
        <Marker key={mark.id} position={[mark.lat, mark.long]} />
      ))}
    </MapContainer>
  );
};

export default Map;
