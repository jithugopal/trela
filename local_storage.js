var Trela = Trela || {};

Trela.LocalStorage = function() {
  this.storageKey = "trelo_whitelisted_domains";
  this.delimiter = "|";
};

Trela.LocalStorage.prototype = {
  setDomains: function(domains) {
    if(this.isArrayEmpty(domains)) {
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
      var domainArr = domainHash[storageKey] ? domainHash[storageKey].split(self.delimiter) : [];
      callback(domainArr);
    });
  },

  onStorageAreaSetListener: function() {
    console.log("Saved");
  },

  getDelimitedString: function(arr) {
    return (arr || []).join(this.delimiter);
  },

  isArrayEmpty: function(arr) {
    if (arr && arr.length > 0) {
      return false;
    }
    return true;
  }
};
