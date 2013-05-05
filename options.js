var Trela = Trela || {};

Trela.Options = function(container) {
  this.saveButton = container.querySelector("#save");
  this.domainContainer = container.querySelector("#domains");
  this.localStorage = new Trela.LocalStorage();
  this.initialize();
};

Trela.Options.prototype = {
  initialize: function() {
    this.restoreDomains();
    this.saveButton.addEventListener('click', this.setDomains.bind(this));
  },

  setDomains: function() {
    var domains = this.domainContainer.value.split("\n");
    this.localStorage.setDomains(domains);
  },

  restoreDomains: function() {
    this.localStorage.fetchDomains(this.onStorageAreaGetListener.bind(this));
  },

  onStorageAreaGetListener: function(domainArr) {
    this.domainContainer.value = domainArr.join("\n");
  }
};

document.addEventListener("DOMContentLoaded", function() {
  new Trela.Options(document);
}, false);
