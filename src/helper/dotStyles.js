export const createStyles = (isActive) => ({
  background: 'transparent',
  border: 0,
  color: isActive ? '#333' : '#ccc',
  cursor: 'pointer',
  fontSize: '50px',
  marginInline: '5px',
});
