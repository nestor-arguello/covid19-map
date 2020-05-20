import formatNumber from '../../utility/formatNumber';
import countryToFlag from '../../utility/countryToFlag';
import { closeDrawer } from '../../actions';
const L = typeof window !== `undefined` ? require('leaflet') : null;

const createMarkers = ({ features, mapRef, dispatch }) => {
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
          : '';

      const flagEmoji = typeof iso2 === 'string' ? countryToFlag(iso2) : '';

      const updatedString = updated ? new Date(updated).toLocaleString() : '';

      const iconHtmlContent = `
            <span class="icon-marker ${severity}">${markerString}
            </span>
          `;

      const popupHtmlContent = `
        <h4  class="country">${flagEmoji} ${country}</h4>
        <ul>
          <li><strong>Confirmed:</strong> ${confirmedString}</li>
          <li><strong>Deaths:</strong> ${deathsString}</li>
          <li><strong>Recovered:</strong> ${recoveredString}</li>
          <li><strong>Last update:</strong> ${updatedString}</li>
        </ul>
      `;

      const divIcon = L.divIcon({
        className: 'icon',
        html: iconHtmlContent,
      });

      const popup = L.popup({
        className: 'icon-popup',
      }).setContent(popupHtmlContent);
      const tooltip = L.tooltip({
        direction: 'top',
        className: 'icon-tooltip',
      })
        .setContent(`${country}`)
        .on(
          'add',
          function (event) {
            if (this.isOpen()) {
              event.target.remove();
            }
          },
          popup
        );

      const marker = L.marker(latlng, {
        icon: divIcon,
        riseOnHover: true,
      })
        .bindPopup(popup)
        .bindTooltip(tooltip)
        .on(
          'popupopen',
          function (event) {
            this.remove();
          },
          tooltip
        )
        .on('click', function () {
          dispatch(closeDrawer());
        });

      return marker;
    },
  }).addTo(mapRef.current);
};

export default createMarkers;
