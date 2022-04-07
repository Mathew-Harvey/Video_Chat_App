import { initializeApp } from 'firebase/app';

const config = {
  apiKey: "AIzaSyC_Y91vJHhgSDR9_CGOqNuCyJlmy17v8v8",
  authDomain: "webrtc-video-chat-9ed8c.firebaseapp.com",
  databaseURL: "https://webrtc-video-chat-9ed8c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webrtc-video-chat-9ed8c",
  storageBucket: "webrtc-video-chat-9ed8c.appspot.com",
  messagingSenderId: "512656536047",
  appId: "1:512656536047:web:d3ac197ba9beddb30ac61a"
}

const app = initializeApp(config)
export default config

