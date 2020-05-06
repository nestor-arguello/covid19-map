const formatNumber = number => {
  const numString = `${number}`;

  const numberFormatted =
    number >= 1000000
      ? `${numString.slice(0, -6)},${numString.slice(-6, -3)},${numString.slice(
          -3
        )}`
      : number >= 1000
      ? `${numString.slice(0, -3)},${numString.slice(-3)}`
      : numString;

  return numberFormatted;
};

export default formatNumber;
