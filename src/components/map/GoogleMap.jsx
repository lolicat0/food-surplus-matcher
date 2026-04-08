import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "AIzaSyCrBPrlTJdyxNaM9DWYfTRxv2drDK-yT_Y";

const GoogleMap = ({ markers, onMarkerClick }) => {
  const mapRef = useRef();
  const mapInstance = useRef();

  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY) {
      console.error('Google Maps API Key is missing!');
      return;
    }

    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.006 }, // Default: NYC
        zoom: 12,
        disableDefaultUI: true,
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ visibility: 'simplified' }, { color: '#ffffff' }],
          },
        ],
      });

      mapInstance.current = map;

      // Clear existing markers before redrawing
      map.markers = map.markers || [];

      // Remove old markers
      map.markers.forEach((marker) => marker.setMap(null));
      map.markers = [];

      // Add new markers with ping animations
      markers.forEach((marker) => {
        // Use different colors for hotels and bakeries
        let pinColor;
        if (marker.category === 'hotel') {
          pinColor = 'blue';
        } else if (marker.category === 'bakery') {
          pinColor = 'orange';
        } else {
          pinColor = marker.status === 'available' ? 'green' : 'red';
        }
        
        const pinImage = new window.google.maps.MarkerImage(
          `https://maps.google.com/mapfiles/ms/icons/${pinColor}-dot.png`,
          null,
          null,
          null,
          new window.google.maps.Size(32, 32)
        );

        const pinShadow = new window.google.maps.MarkerImage(
          'https://maps.google.com/mapfiles/ms/icons/msmarker.shadow.png',
          null,
          null,
          null,
          new window.google.maps.Size(50, 37)
        );

        const pin = new window.google.maps.Marker({
          position: { lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) },
          map,
          title: marker.foodName,
          icon: pinImage,
          shadow: pinShadow,
        });

        pin.addListener('click', () => onMarkerClick(marker));

        // Add ping animation for hotels and bakeries
        if (marker.hasPing && (marker.category === 'hotel' || marker.category === 'bakery')) {
          const pingCircle = new window.google.maps.Circle({
            strokeColor: pinColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: pinColor,
            fillOpacity: 0.2,
            map,
            center: { lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) },
            radius: 100,
          });

          // Animate the ping circle
          let radius = 100;
          const animatePing = () => {
            radius += 20;
            pingCircle.setRadius(radius);
            if (radius < 300) {
              setTimeout(animatePing, 100);
            } else {
              radius = 100;
              pingCircle.setRadius(radius);
              setTimeout(animatePing, 2000); // Restart animation after 2 seconds
            }
          };
          animatePing();

          // Store ping circle reference
          map.markers.push(pingCircle);
        }

        // Store marker reference
        map.markers.push(pin);
      });

      // Center map on user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            map.setCenter(pos);
            map.setZoom(14);
          },
          () => {
            console.log('Geolocation failed — using default center');
          }
        );
      }

      return () => {
        if (mapInstance.current && mapInstance.current.markers) {
          mapInstance.current.markers.forEach(marker => marker.setMap(null));
        }
      };
    });
  }, [markers, onMarkerClick]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%', borderRadius: '1rem' }}></div>
  );
};

export default GoogleMap;