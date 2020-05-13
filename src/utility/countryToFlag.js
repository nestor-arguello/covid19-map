const countryToFlag = iso2 => {
  return typeof iso2 === 'string'
    ? iso2
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : '';
};

export default countryToFlag;
