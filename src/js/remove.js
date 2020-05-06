export const removePage = () => {
  let contentChildren = [...document.querySelector("#content").children];
  contentChildren.forEach(function (element, index) {
    if (index != 0 && index != contentChildren.length - 1) {
      element.parentNode.removeChild(element);
    }
  });
};
