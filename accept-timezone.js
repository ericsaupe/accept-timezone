var timezone

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    chrome.storage.local.get('timezone', function(item) {
      if (!Object.keys(item).length && item.constructor === Object) {
        timezone = 'Etc/UTC'
      } else {
        timezone = item['timezone']
      }
    })
    details.requestHeaders.push({ name: 'Accept-Timezone', value: timezone })
    console.log(details.requestHeaders)
    return { requestHeaders: details.requestHeaders }
  },
  {urls: ['<all_urls>']},
  ['requestHeaders']
);
