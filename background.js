chrome.browserAction.onClicked.addListener(tab =>
  chrome.tabs.sendMessage(tab.id, {"message": "clicked_browser_action"})
);
