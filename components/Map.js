import React, { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet"

const Map = () => {

    const ENDPOINT_AQI = "https://rald-dev.greenbeep.com/api/v1/aqi";
    const DEFAULT_CENTER = [-25.250, -57.536]
    const DEFAULT_ZOOM = 11
    const minutesToSubtract = 30;
    const currentDate = new Date();
    const time = new Date(currentDate.getTime() - minutesToSubtract * 60000);
    const utcDate = time.toISOString();
    const searchUrl = ENDPOINT_AQI + '?start=' + utcDate;
    const [mapData, setMapata] = useState([])

    useEffect(() => {
        fetch(searchUrl)
            .then((res) => res.json())
            .then((data) => {
                setMapata(data);
            })
    }, [])

    const position = [-25.194156, -57.521369];
    const ICON = icon({
        iconUrl: "https://www.maxpixel.net/static/photo/640/Map-Position-Green-Poi-Marker-Pin-Location-304466.png",
        iconSize: [32, 32],
    })

    return (
        <>
            <Container marginTop='30px' marginBottom='30px' height='30vh' width='1000px'>
                <MapContainer center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} style={{ height: "100%", width: "100%" }} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {mapData.map((marker) => (
                        <Marker position={[marker.latitude, marker.longitude]} icon={ICON} iconSize={[30, 42]} iconAnchor={[15, 42]} key={marker.latitude}>
                            <Popup>
                                {marker.description} <br />
                                {marker.quality.index} AQI - {marker.quality.category}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </Container>

        </>
    )
}

export default Map;