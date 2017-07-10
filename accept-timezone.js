var timezone;

chrome.storage.local.get("accept-timezone", function(item){
  if (Object.keys(item).length === 0 && item.constructor === Object) {
    timezone = 'Etc/UTC'
  } else {
    timezone = item["accept-timezone"];
  }
  setListener();
});

function setListener() {
  chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
      details.requestHeaders.push({ name: 'Accept-Timezone', value: timezone })
      console.log(details.requestHeaders);
      return { requestHeaders: details.requestHeaders };
    },
    {urls: ['<all_urls>']},
    [ 'requestHeaders' ]
  );
}
