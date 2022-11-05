import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "100vh",
    height: "90vh"
};

// Put Pin / Marker to Buginyanya

const center = {
    lat: 0.8500,
    lng: 34.7167,
}

export default function Map() {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
    })

    if (loadError) return <p>Error while Loading maps</p>
    if (!isLoaded) return <p>Loading Farmer Map...</p>
    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={11}
            center={center}
        >
            <MarkerF
                onLoad={(marker) => console.log('loaded marker', marker)}
                position={{
                    lat: 34.35,
                    lng: 1.283333
                }}
                icon="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png"
            />
        </GoogleMap>
    )
}