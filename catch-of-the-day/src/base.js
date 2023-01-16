import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqyGSvKWGGicesioAjejFWk3dnZBf6fKo",
    authDomain: "cremedelecrumb.firebaseapp.com",
    databaseURL: "https://cremedelecrumb-default-rtdb.firebaseio.com",
    // projectId: "cremedelecrumb",
    // storageBucket: "cremedelecrumb.appspot.com",
    // messagingSenderId: "717964742428",
    // appId: "1:717964742428:web:1506dbe4740a2ac7f5b4d9"
});

const base = Rebase.createClass(firebaseApp.database());


//This is a named export
export { firebaseApp };

//This is a default export
export default base;