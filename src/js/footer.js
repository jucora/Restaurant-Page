const footer = () => {
  const footerTag = document.createElement('footer');
  footerTag.classList.add('row');
  footerTag.textContent = 'Created by Julian Belmonte | @copyright - All rights reserved';
  return footerTag;
};
export default footer;
