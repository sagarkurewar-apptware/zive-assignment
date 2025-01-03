// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCiLt02SggZdwY_PT27BGaLrcwYwcPG1TM",
  authDomain: "builderfax-f9c67.firebaseapp.com",
  projectId: "builderfax-f9c67",
  storageBucket: "builderfax-f9c67.appspot.com",
  messagingSenderId: "262563897662",
  appId: "1:262563897662:web:3dfd8febba3fa7685b4c6f",
  measurementId: "G-5H2NSBKE56",
};

// Initialize Firebase in the service worker
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
