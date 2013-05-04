var Trela = Trela || {};

Trela.Options = function(container) {
  this.saveButton = container.querySelector("#save");
  this.domainContainer = container.querySelector("#domains");
  this.restoreDomains();
  this.initialize();
};

Trela.Options.prototype = {
  initialize: function() {
    this.saveButton.addEventListener('click', this.persistDomains.bind(this));
  },

  persistDomains: function() {
    var domains = this.domainContainer.value.split("\n").join("|");
    this.setLocalStorage(domains);
  },

  restoreDomains: function() {
    var domains = this.localStorage("whitelisted_domains").split("|");
    this.domainContainer.value = domains.join("\n");
  },

  setLocalStorage: function(domains) {
    localStorage["whitelisted_domains"] = domains;
  },

  localStorage: function(storageName) {
    localStorage[storageName] = localStorage[storageName] || "";
    return localStorage[storageName];
  }
};

document.addEventListener("DOMContentLoaded", function() {
  new Trela.Options(document);
}, false);
