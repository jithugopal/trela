var Trela = Trela || {};

Trela.LocalStorage = function() {
  this.storageKey = "trelo_whitelisted_domains";
  this.delimiter = "|";
};

Trela.LocalStorage.prototype = {
  setDomains: function(domains) {
    if(Trela.Helpers.isArrayEmpty(domains)) {
      chrome.storage.sync.remove(this.storageKey);
    } else {
      var domainHash = {};
      domainHash[this.storageKey] = this.getDelimitedString(domains);
      chrome.storage.sync.set(domainHash, this.onStorageAreaSetListener.bind(this));
    }
  },

  fetchDomains: function(callback) {
    var storageKey = this.storageKey;
    chrome.storage.sync.get(storageKey, function(domainHash) {
      var domainArr = domainHash[storageKey] ? Trela.Helpers.split(domainHash[storageKey], self.delimiter) : [];
      callback(domainArr);
    });
  },

  onStorageAreaSetListener: function() {
    console.log("Saved");
  },

  getDelimitedString: function(arr) {
    return (arr || []).join(this.delimiter);
  }
};
