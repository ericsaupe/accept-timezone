// Saves options to chrome.storage
function save_options() {
  var timezone = document.getElementById('timezone').value;
  chrome.storage.sync.set({
    timezone: timezone
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value timezone = 'Etc/UTC'
  chrome.storage.sync.get({
    timezone: 'Etc/UTC'
  }, function(items) {
    document.getElementById('timezone').value = items.timezone;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
