const createFooter = (() => {
  const footer = () => {
    const footerTag = document.createElement('footer');
    footerTag.classList.add('row');
    footerTag.textContent = 'Created by Julian Belmonte | @copyright - All rights reserved';
    document.getElementById('content').appendChild(footerTag);
  };
  return {
    footer,
  };
})();

export default createFooter;
