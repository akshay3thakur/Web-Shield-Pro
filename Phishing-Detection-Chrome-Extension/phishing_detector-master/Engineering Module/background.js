chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.prediction === 1) {
        console.log("Warning: Phishing detected!!");
        createNotification("Warning: Phishing detected!!");
    } else if (message.prediction === -1) {
        console.log("No phishing detected");
        createNotification("No phishing detected");
    }
});

function createNotification(message) {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'images.jpeg',
        title: 'Web Shield Pro',
        message: message
    });
}
