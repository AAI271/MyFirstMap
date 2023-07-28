import {useEffect, useState} from 'react';
import './index.scss'
import {MapContainer, Marker, Polyline, Popup, TileLayer, useMap} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {useSelector} from "react-redux";
import {LatLngExpression} from "leaflet";
import {IRouting, IState} from "../../models/models";
import * as L from 'leaflet';



const MapTest = () => {
    const routing =useSelector((state:IState) => state.routingReducer.routing)

    const [polyline, setPolyline] = useState<[number, number][]>([])
    const [center, setCenter] = useState<LatLngExpression | undefined>([59.984981,30.345867])
    useEffect(()=>{
        setPolyline(routing.map((item:IRouting)=>item.location))
        setCenter(polyline[1])

    },[routing])

    function MyComponent() {
        const map = useMap()
        if (polyline[1]) {
            map.setView(polyline[1])
            if (polyline.length >= 3) {
                // Create an array of LatLng objects from the coordinates
                const latLngs = polyline.map((coord) => L.latLng(coord[0], coord[1]));

                // Calculate the bounds that enclose all the LatLng objects
                const bounds = L.latLngBounds(latLngs);

                // Fit the map's view to the calculated bounds
                map.fitBounds(bounds, { padding: [50, 50] }); // You can adjust the padding as needed
            }
        }
        return null
    }




    const white = { color: 'white' }
    return (
        <div className='map-test'>
            <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline pathOptions={white} positions={polyline} />
                {polyline.map(item=>(
                    <Marker position={item}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                ))}
                <MyComponent/>
            </MapContainer>
        </div>
    );
};

export default MapTest;
