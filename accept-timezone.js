var timezone

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    chrome.storage.sync.get({ timezone: 'Etc/UTC' }, function(items) {
      timezone = items.timezone
    })
    details.requestHeaders.push({ name: 'Accept-Timezone', value: timezone })
    return { requestHeaders: details.requestHeaders }
  },
  {urls: ['<all_urls>']},
  ['blocking', 'requestHeaders']
);
