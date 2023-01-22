import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

 function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC3eSorRjj0fCCZ_o52CqXvxDLeB_ZhFao',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  console.log("RENDERING MAP...");
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Home;