/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

import createMap from './createMap';
import createFeatures from './createFeatures';
import createMarkers from './createMarkers';

import { setMap } from '../../actions';
import fetchCountries from '../../utility/fetchCountries';
import moveToSelectedCountry from './moveToSelectedCountry';

const useMap = ({ mapId, countries, selectedCountryCoord, dispatch }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    createMap({ mapId, mapRef, dispatch });
    dispatch(setMap(mapRef));

    return () => {
      mapRef.current.remove();
    };
  }, [mapId]);

  useEffect(() => {
    fetchCountries(dispatch);
  }, []);

  useEffect(() => {
    const features = createFeatures(countries);

    createMarkers({ features, mapRef });
  }, [countries]);

  useEffect(() => {
    moveToSelectedCountry({ mapRef, selectedCountryCoord });
  }, [selectedCountryCoord]);
};

export default useMap;
