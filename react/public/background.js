chrome.commands.onCommand.addListener(function(command) {
  if(command==='toggle-gun-shot'){
    chrome.tabs.executeScript({ file: 'script.js' });
  }
});