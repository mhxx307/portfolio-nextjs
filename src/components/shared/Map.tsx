import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import { useEffect, useState } from 'react';
// import L from 'leaflet';
import icon from '../../constants/icons';

function Map() {
    return (
        <MapContainer
            center={[10.4640476, 105.6295345]}
            zoom={15}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            <div className="map-content">
                <h3 className="text-colorTem">La Võ Minh Quân</h3>
                <br />
                <span>Location : Thành phố Cao Lãnh</span>
                <br />
                <span>Email: minhquan.lavo@gmail.com</span>
            </div>
        </MapContainer>
    );
}

export default Map;

function LocationMarker() {
    // const [position, setPosition] = useState<any>(null);
    // const [bbox, setBbox] = useState<any>([]);

    // const map = useMap();

    // console.log(position);

    // useEffect(() => {
    //     map.locate().on('locationfound', function (e) {
    //         setPosition(e.latlng);
    //         map.flyTo(e.latlng, map.getZoom());
    //         const radius = e.accuracy;
    //         const circle = L.circle(e.latlng, radius);
    //         circle.addTo(map);
    //         setBbox(e.bounds.toBBoxString().split(','));
    //     });
    // }, [map]);
    // position === null ? null :

    return (
        <Marker position={[10.4640476, 105.6295345]} icon={icon}>
            <Popup>
                {/* You are here. <br />
                Map bbox: <br />
                <b>Southwest lng</b>: {bbox[0]} <br />
                <b>Southwest lat</b>: {bbox[1]} <br />
                <b>Northeast lng</b>: {bbox[2]} <br />
                <b>Northeast lat</b>: {bbox[3]} */}
                i am here
            </Popup>
        </Marker>
    );
}
