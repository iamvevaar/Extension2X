// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript(null, {code: "var video = document.querySelector('video'); video.playbackRate = 2;"});
//   });
  


// // Initialize the current video speed to 1 (normal playback rate)
// var currentSpeed = 1;

// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Toggle the video speed between 1 (normal) and 2 (double)
//   if (currentSpeed === 1) {
//     chrome.tabs.executeScript(null, {code: "var video = document.querySelector('video'); video.playbackRate = 2;"});
//     currentSpeed = 2;
//   } else {
//     chrome.tabs.executeScript(null, {code: "var video = document.querySelector('video'); video.playbackRate = 1;"});
//     currentSpeed = 1;
//   }
// });


// Initialize the current video speed to 1 (normal playback rate)
var currentSpeed = 1;

chrome.browserAction.onClicked.addListener(function(tab) {
  // Toggle the video speed between 1 (normal) and 2 (double)
  if (currentSpeed === 1) {
    chrome.tabs.executeScript(null, {code: "var video = document.querySelector('video'); video.playbackRate = 2;"});
    currentSpeed = 2;
    chrome.browserAction.setIcon({path: "icon48-2x.png"});
  } else {
    chrome.tabs.executeScript(null, {code: "var video = document.querySelector('video'); video.playbackRate = 1;"});
    currentSpeed = 1;
    chrome.browserAction.setIcon({path: "icon48.png"});
  }
});
