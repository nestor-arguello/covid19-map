import L from 'leaflet';

const createMarkers = ({ features, mapRef }) => {
  L.geoJSON(features, {
    pointToLayer: (feature, latlng) => {
      const { country, iso2, cases } = feature.properties;

      const casesText = `${cases}`;

      const markerText =
        cases >= 1000000
          ? `${casesText.slice(0, -6)}m+`
          : cases >= 1000
          ? `${casesText.slice(0, -3)}k+`
          : casesText;

      const flagEmoji =
        typeof iso2 === 'string'
          ? iso2
              .toUpperCase()
              .replace(/./g, char =>
                String.fromCodePoint(char.charCodeAt(0) + 127397)
              )
          : '';

      const html = `
            <span class="icon-marker">${markerText}
            </span>
            <span class="icon-tooltip">
              <h4>${flagEmoji} ${country}</h4>
            </span>
          `;

      const divIcon = L.divIcon({
        className: 'icon',
        html,
      });

      return L.marker(latlng, {
        icon: divIcon,
      });
    },
  }).addTo(mapRef.current);
};

export default createMarkers;
