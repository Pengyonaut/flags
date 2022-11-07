import React, {useEffect} from 'react'
import { MapContainer, TileLayer,  Marker, useMap } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import DemographicsLabel from "./DemographicsLabel"



let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });
  
  
  L.Marker.prototype.options.icon = DefaultIcon;

export default function Map({config, demographics}) {

    

    const RecenterAutomatically = ({lat,lng}) => {
        const map = useMap();
         useEffect(() => {
           map.setView([lat, lng]);
         }, [lat, lng]);
         return null;
       }


  return (

<div className='mb-3'>
<div className='mb-2'>
    <DemographicsLabel icon={"travel_explore"} label={"Country location"} result={undefined} />
  </div>

<MapContainer  center={config.defaultCenter} zoom={config.defaultZoom} scrollWheelZoom={true} className={"leaflet"}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[demographics.lat, demographics.lng]}>
    </Marker>

    <RecenterAutomatically lat={demographics.lat} lng={demographics.lng} />
  </MapContainer>
  </div>
  )
}
