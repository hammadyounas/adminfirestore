// import { FireStore } from './index';
import { firebase } from './../../../src/app/app.module';
// import { AngularFirestoreCollection } from 'angularfire2/firestore';
// import { AngularFirestoreDocument } from 'angularfire2/firestore';
import * as functions from 'firebase-functions'
var admin = require("firebase-admin");

var serviceAccount = require("../lib/config/friendlychat-813.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://friendlychat-813.firebaseio.com"
});
const fire = admin.firestore();
// const firestore = admin.firestore();
export class FireStore{
    static addUser(){
        console.log("done in db");
        fire.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        .then((docRef:any) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error:any) => {
            console.error("Error adding document: ", error);
        });
    }

}
// let data = {
//     // firestore: firestore,
//     init: ()=>{
        
//     }
// }
// data.init();
 export default fire;