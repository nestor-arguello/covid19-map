import L from 'leaflet';

import formatNumber from '../../utility/formatNumber';

const createMarkers = ({ features, mapRef }) => {
  L.geoJSON(features, {
    pointToLayer: (feature, latlng) => {
      const {
        country,
        iso2,
        cases,
        deaths,
        recovered,
        updated,
      } = feature.properties;

      const casesString = `${cases}`;

      const markerString =
        cases >= 1000000
          ? `${casesString.slice(0, -6)}m+`
          : cases >= 1000
          ? `${casesString.slice(0, -3)}k+`
          : casesString;

      const confirmedString = formatNumber(cases);
      const deathsString = formatNumber(deaths);
      const recoveredString = formatNumber(recovered);

      const severity = 
        cases >= 100000
          ? 'high'
          : cases >= 10000
          ? 'mid'
          : cases >= 1000
          ? 'low'
          : ''
      
      const flagEmoji =
        typeof iso2 === 'string'
          ? iso2
              .toUpperCase()
              .replace(/./g, char =>
                String.fromCodePoint(char.charCodeAt(0) + 127397)
              )
          : '';

      const updatedString = updated ? new Date(updated).toLocaleString() : '';

      const html = `
            <span class="icon-marker ${severity}">${markerString}
            </span>
            <span class="icon-tooltip">
              <h4>${flagEmoji} ${country}</h4>
              <ul>
                <li>Confirmed: ${confirmedString}</li>
                <li>Deaths: ${deathsString}</li>
                <li>Recovered: ${recoveredString}</li>
                <li>Last update: ${updatedString}</li>
              </ul>
            </span>
          `;

      const divIcon = L.divIcon({
        className: 'icon',
        html,
      });

      return L.marker(latlng, {
        icon: divIcon,
        riseOnHover: true,
      });
    },
  }).addTo(mapRef.current);
};

export default createMarkers;
