export const createStyles = (isActive) => ({
  border: 0,
  background: "transparent",
  color: isActive ? "#333" : "#ccc",
  cursor: "pointer",
  fontSize: "50px",
  marginInline: "5px",
});

export const numOfDots = ({ length, numOfSlides }) => {
  const numRaw = length / numOfSlides;
  return Number.isInteger(numRaw) ? numRaw : Math.floor(numRaw) + 1;
};
