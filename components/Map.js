import React from 'react';
import { Text, Container } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

const Map = () => {

    const position = [-25.250, -57.536]

    if (typeof window !== "undefined") {
        // browser code
        return (
            <>
                <Container maxW='lg' h="300px" mt="10">
                    <MapContainer center={position}
                        zoom={13}
                        scrollWheelZoom={true}
                        style={{ height: "100%", width: "100%" }}>
                        <TileLayer
                            attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
                            url={`https://api.mapbox.com/styles/v1/bloq/ckyg7rfkw18qy15mp2k0amx5d/tiles/512/1/1/0@2x?access_token=pk.eyJ1IjoiYmxvcSIsImEiOiJja3lnNm41YTAwc3k3MnVyc3gyNmZieWkyIn0.EiLYVOnjXr_FgcAZ2Z-1pg`}
                        />
                        {/* <Marker position={[40.8054, -74.0241]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker> */}
                    </MapContainer>
                </Container>
            </>
        );
    }

    return null

}

export default Map;
