import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const Map = (props) => {
  const start = [props.markers[0].lat, props.markers[0].long];
  const [activeMarker, setActiveMarker] = useState (null);
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
        <Marker key={mark.id} position={[mark.lat, mark.long]}>
          <Popup>
            This is a popup
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
