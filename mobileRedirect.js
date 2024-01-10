// mobileRedirect.js

// Check if the device is a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  
  // Check if the viewport width is less than a specified threshold
  function isSmallViewport() {
    return window.innerWidth < 100; // Adjust the threshold as needed
  }
  
  // Redirect or display a message based on the device and viewport
  function handleDeviceType() {
    if (isMobileDevice() && isSmallViewport()) {
      // The device is a mobile device with a small viewport
      alert("Page is already in desktop mode");
      // You can also redirect the user to a mobile-specific URL
      // window.location.href = "mobile.html";
    }
  }
  
  // Call the function when the page loads
  window.onload = handleDeviceType;
