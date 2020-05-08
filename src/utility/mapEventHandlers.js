export const handleMarkerClick = async function (event) {
  const { target } = event.originalEvent;

  await document.querySelectorAll('.icon-tooltip').forEach(tooltip => {
    if (tooltip.classList.contains('show')) {
      tooltip.classList.remove('show');
    }
  });
  target.querySelector('.icon-tooltip').classList.add('show');
};

export const handleMapClick = function (event) {
  const { target } = event.originalEvent;

  document.querySelectorAll('.icon-tooltip').forEach(tooltip => {
    if (tooltip.classList.contains('show')) {
      tooltip.classList.remove('show');
    }
  });
};
