const button = document.getElementById('button');

button.onclick = e => {
    chrome.tabs.query({}, tabs => {
        const list = [];
        for (let tab of tabs) {
            list.push(tab.url);
        }
        const content = {
            url_list: list
        };
        const blob = new Blob([JSON.stringify(content)], { "type": "text/json"});
        chrome.downloads.download({ url: URL.createObjectURL(blob), filename: "url_list.json"}, downloadId => {});    
    });
};