import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9lbWMiLCJhIjoiY2xkNnRodHZtMHNqbTNwbzR2d2ZlY2hwNSJ9.cu3V1_fjjjX2MkbcVfiFzA';

export default function SanLuisObispoMap() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lat, setLat] = useState(35.2827);
	const [lng, setLng] = useState(-120.6596);
	const [zoom, setZoom] = useState(13);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v12',
			center: [lng, lat],
			zoom: zoom
			});
	});

	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
			});
	});

	return (
		<div>
			<div className="sidebar">
				Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
			</div>
			<div style={{width: "100%", height: "100%"}} ref={mapContainer} className="map-container" />
		</div>
	);
}