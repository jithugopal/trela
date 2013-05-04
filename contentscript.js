var Trela = Trela || {};

Trela.Content = function() {
  this.allowedUrl = /irctc/;
  this.documentUrl = document.URL;
  this.initialize();
};

Trela.Content.prototype = {
  initialize: function() {
    if(this.allowedUrl.test(this.documentUrl)) {
      chrome.extension.sendMessage({}, this.logListener.bind(this));
    }
  },

  logListener: function(message) {
    console.log(message);
  }
};

document.addEventListener("DOMContentLoaded", function() {
    new Trela.Content();
  }, false);
