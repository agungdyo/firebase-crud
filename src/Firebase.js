import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
	apiKey: "AIzaSyDgATa1Up9L5e3yh3jT4R8vQmwbhIqG3Gk",
    authDomain: "arma-dev-v1.firebaseapp.com",
    databaseURL: "https://arma-dev-v1.firebaseio.com",
    projectId: "arma-dev-v1",
    storageBucket: "arma-dev-v1.appspot.com",
    messagingSenderId: "469721669381"

};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;