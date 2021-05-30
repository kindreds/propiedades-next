export const createStyles = (isActive) => ({
  background: 'transparent',
  border: 0,
  color: isActive ? '#333' : '#ccc',
  cursor: 'pointer',
  fontSize: '50px',
  marginInline: '5px',
});

export const numOfDots = ({ length, numOfSlides }) => {
  const numRaw = length / numOfSlides;
  const num = Number.isInteger(numRaw) ? numRaw : Math.floor(numRaw) + 1;
  return num;
};
