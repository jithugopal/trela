function onMessageListener(request, sender, sendResponse) {
  chrome.pageAction.show(sender.tab.id);
  sendResponse("Aha!");
}

chrome.extension.onMessage.addListener(onMessageListener);
