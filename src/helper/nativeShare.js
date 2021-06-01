export const nativeShare = () => {
  if (navigator.share) {
    navigator
      .share({
        title: 'WebShare API Demo',
        url: 'http://localhost:1234/propiedades/1',
      })
      .then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
  } else {
    console.log('error');
  }
};
