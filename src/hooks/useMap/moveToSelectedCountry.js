const moveToSelectedCountry = ({ mapRef, selectedCountryCoord }) => {
  const { current: map } = mapRef;

  if (selectedCountryCoord !== null) {
    map.flyTo(selectedCountryCoord);

    map.eachLayer(function (layer) {
      if (layer.feature) {
        const markerCoordString = Object.values(layer.getLatLng()).toString();
        const selectedCountryCoordString = selectedCountryCoord.toString();

        if (markerCoordString === selectedCountryCoordString) {
          map.on('moveend', function () {
            layer.openPopup();
            map.off('moveend');
          });
        }
      }
    });
  }
};

export default moveToSelectedCountry;