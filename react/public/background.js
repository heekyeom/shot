chrome.commands.onCommand.addListener(function(command) {
  if(command=='toggle-shot'){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        message: "toggle_shot"
      });
    });
  }
  if(command=='play-shot'){
    console.log('this!!!');
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        message: "play_shot"
      });
    });
  }
});