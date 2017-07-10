function settingChanged() {
  var setting = this.value;
  chrome.storage.local.set({ "accept-timezone": setting }, function(){
    console.log(setting);
  });
}

chrome.storage.local.get("accept-timezone", function(item){
  var timezone;
  if (Object.keys(item).length === 0 && item.constructor === Object) {
    timezone = 'Etc/UTC'
  } else {
    timezone = item["accept-timezone"];
  }
  var element = document.getElementById('timezone');
  element.value = timezone;
  console.log(timezone);
  console.log(element.value);
  element.addEventListener('change', settingChanged);
});
