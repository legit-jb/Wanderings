import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const Map = (props) => {
  const start = [props.markers[0].lat, props.markers[0].long];
  const [polyline, setPolyline] = useState (null);

  useEffect (() =>{
    const polyco = [];
    props.markers.map((pol) =>(
      polyco.push([pol.lat, pol.long])
    ))
    // end of map
    setPolyline(polyco);
  },[])

  return (
    <MapContainer
      center={start}
      zoom={25}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.markers.map((mark) => (
        <Marker key={mark.id} position={[mark.lat, mark.long]}>
          <Popup>
            <span>{mark.name}</span>
            <div className="leaflet-popup-image-com-row">
            <img src={mark.image} alt={mark.name} width="100" />
            <p>{mark.comments}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={polyline} />

    </MapContainer>
  );
};

export default Map;
