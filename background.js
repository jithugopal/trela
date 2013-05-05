var Trela = Trela || {};

Trela.Background = function(audioElement) {
  this.audioElement = audioElement;
  this.initialize();
};

Trela.Background.prototype = {
  initialize: function() {
    chrome.extension.onMessage.addListener(this.onMessageListener.bind(this));
  },

  onMessageListener: function(request, sender, sendResponse) {
    this.showPageAction(sender.tab.id);
    this.playBell();
    sendResponse("Page Load!");
  },

  showPageAction: function(tabId) {
    chrome.pageAction.show(tabId);
  },

  playBell: function() {
    this.audioElement.play();
  }
};

document.addEventListener("DOMContentLoaded", function() {
    new Trela.Background(document.getElementById("bell"));
}, false);

