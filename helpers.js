var Trela = Trela || {};
Trela.Helpers = {};

Trela.Helpers = {
  split: function(string, delimiter) {
    var ret = [];
    var delimiter = delimiter || ' ';
    var tokenArr = string.split(delimiter);
    for (var index in tokenArr) {
      if (!!tokenArr[index]) {
        ret.push(tokenArr[index]);
      }
    }
    return ret;
  },

  isArrayEmpty: function(arr) {
    if (arr && arr.length > 0) {
      return false;
    }
    return true;
  }
};
