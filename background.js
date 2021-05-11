function backup() {
    console.log('aaaa')
    /*
    chrome.tabs.query({}, tabs => {
        const list = [];
        for (let tab of tabs) {
            list.push(tab.url);
        }
        const content = {
            url_list: list
        };
        const blob = new Blob([JSON.stringify(content)], { "type": "text/json"});
        chrome.downloads.download({ url: window.URL.createObjectURL(blob), filename: "url_list.json"}, downloadId => {});
    });
    */
}

chrome.action.onClicked.addListener(tab => {
    chrome.tabs.query({}, tabs => {
        const list = [];
        for (let tab of tabs) {
            list.push(tab.url);
        }
        const content = {
            url_list: list
        };
        const blob = new Blob([JSON.stringify(content)], { "type": "text/json"});
        // chrome.downloads.download({ url: URL.createObjectURL(blob), filename: "url_list.json"}, downloadId => {});    
        chrome.downloads.download({ url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Moonbeam_UFO.JPG", filename: "url_list.json"}, downloadId => {});    
    });
    /*
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: backup,
    },
    () => {
        console.log('test');
        chrome.tabs.query({}, tabs => {
            const list = [];
            for (let tab of tabs) {
                list.push(tab.url);
            }
            const content = {
                url_list: list
            };
            const blob = new Blob([JSON.stringify(content)], { "type": "text/json"});
            chrome.downloads.download({ url: window.URL.createObjectURL(blob), filename: "url_list.json"}, downloadId => {});    
        });
    });
    */
});