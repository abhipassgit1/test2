// Give the service worker access to Firebase Messaging.

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
var config = {
    messagingSenderId: "sender_id"
};
firebase.initializeApp(config);

// Retrieve an instance of Firebase Data Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// Handle messages when the web page is in the foreground
messaging.onMessage(function(payload) {
    const notificationTitle = 'Data Message Title';
    const notificationOptions = {
        body: 'Data Message body',
        icon: 'alarm.png'
    };

    // Show the notification only when the web page is in the foreground
    if (document.visibilityState === 'visible') {
        self.registration.showNotification(notificationTitle, notificationOptions);
    }
});
