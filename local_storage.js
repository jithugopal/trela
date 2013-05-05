var Trela = Trela || {};

Trela.LocalStorage = function() {
  this.bucket = "trelo_whitelisted_domains";
  this.delimiter = "|";
};

Trela.LocalStorage.prototype = {
  setDomains: function(domains) {
    var payload = {};
    payload[this.bucket] = this.getDelimitedString(domains);
    chrome.storage.sync.set(payload, this.onStorageAreaSetListener.bind(this));
  },

  fetchDomains: function(callback) {
    var self = this;
    chrome.storage.sync.get(this.bucket, function(domainHash) {
      var domainArr = (domainHash.trelo_whitelisted_domains || "").split(self.delimiter);
      callback(domainArr);
    });
    return self;
  },

  onStorageAreaSetListener: function() {
    console.log("Saved");
  },

  getDelimitedString: function(arr) {
    return (arr || []).join(this.delimiter);
  }
};
