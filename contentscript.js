var Trela = Trela || {};

Trela.Content = function() {
  this.localStorage = new Trela.LocalStorage();
  this.documentUrl = document.URL;
  this.initialize();
};

Trela.Content.prototype = {
  initialize: function() {
    var self = this;
    this.localStorage.fetchDomains(function(allowedDomains){
      for (var index in allowedDomains) {
        var domainRegEx = new RegExp(allowedDomains[index]);
        if(domainRegEx.test(self.documentUrl)) {
          chrome.extension.sendMessage({}, self.logListener);
        }
      }
    });
  },

  logListener: function(message) {
    console.log(message);
  }
};

document.addEventListener("DOMContentLoaded", function() {
  new Trela.Content();
}, false);
