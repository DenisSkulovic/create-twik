const twikPopupWrapper_click = (e) => {
  e.stopPropagation();
  console.log("click popup");
};

const twikOverlay_click = (e) => {
  e.stopPropagation();
  console.log("overlay click");
};

export default { twikPopupWrapper_click, twikOverlay_click };
