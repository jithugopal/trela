var allowed_url = /irctc/;

if(allowed_url.test(document.URL)) {
  chrome.extension.sendMessage({}, alertListener);
}

function alertListener(message) {
  alert(message);
}
