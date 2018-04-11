chrome.runtime.onMessage.addListener((
  request,
  sender,
  sendResponse) => {
    switch (request.message) {
      case "red":
        document.body.style.background = "red";
        break;
      case "green":
        document.body.style.background = "green";
        break;
      case "blue":
        document.body.style.background = "blue";
        break;
      case "clicked_browser_action":
        document.body.style.background = "black";
        break;
      default:
        console.log(`Failed action: ${request.message}`)
    }
  }
);
