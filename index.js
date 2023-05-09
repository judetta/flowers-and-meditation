// Detect IE 10 and IE 11
function isIE() {
    return /Trident\/|MSIE/.test(window.navigator.userAgent);
}

if (isIE()) {
  alert('This page does not support IE! Please update to a modern browser!');
}
