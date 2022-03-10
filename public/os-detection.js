/**
 * @returns {'android' | 'ios' | 'other' } 
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
      return "android";
  }
  if (/iPad|iPhone/.test(userAgent) && !window.MSStream) {
      return "ios";
  }
  return "other";
}