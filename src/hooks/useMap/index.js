import { useEffect, useRef } from 'react';

import createMap from './createMap';
import createFeatures from './createFeatures';
import createMarkers from './createMarkers';

const useMap = ({ mapId, countries }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    createMap({ mapId, mapRef });

    return () => {
      mapRef.current.remove();
    }
  }, [mapId]);

  useEffect(() => {
    const features = createFeatures(countries);
    console.log(features);

    createMarkers({ features, mapRef });
  }, [countries]);
};

export default useMap;
