import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyAKs6HGdK3B0mJ7HAV3NWgWyXkzPAB8kXU",
    authDomain: "plant-service.firebaseapp.com",
    databaseURL: "https://plant-service.firebaseio.com",
    projectId: "plant-service",
    storageBucket: "gs://plant-service.appspot.com",
    messagingSenderId: "1073198893164",
    appId: "1:1073198893164:web:9a74aab54a07e98f313049",
    measurementId: "G-CEM5VPERQG"
}

class Firebase{
    constructor(){
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }

    async signin(email, password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch( err => {
            console.log(err);
        });
        return user;
    }

    async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch( err => {
            console.log(err);
        });
        return user;
    }

    async logout(){
        await firebase.auth().signOut().cath(err => {
            console.log(err);
        });
    }
}

export default new Firebase();