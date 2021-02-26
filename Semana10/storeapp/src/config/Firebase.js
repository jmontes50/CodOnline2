import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBDWc6glLdL7osILJ0nR1hzYw8S8CvmcqQ",
  authDomain: "codigoonline2-b650b.firebaseapp.com",
  projectId: "codigoonline2-b650b",
  storageBucket: "codigoonline2-b650b.appspot.com",
  messagingSenderId: "566336241471",
  appId: "1:566336241471:web:ee542b7c941f5151d71d8a",
};

const fire = firebase.initializeApp(config)

export {
  fire as default
}