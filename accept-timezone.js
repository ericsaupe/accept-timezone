(function() {
  'use strict';

  var timezone;

  chrome.storage.local.get('accept-timezone', function(item) {
    if (!Object.keys(item).length && item.constructor === Object) {
      timezone = 'Etc/UTC'
    } else {
      timezone = item['accept-timezone'];
    }
    setListener();
  });

  function setListener() {
    chrome.webRequest.onBeforeSendHeaders.addListener(
      function(details) {
        details.requestHeaders.push({ name: 'Accept-Timezone', value: timezone })
        return { requestHeaders: details.requestHeaders };
      },
      { urls: [ '<all_urls>' ] },
      [ 'requestHeaders' ]
    );
  }
})()
