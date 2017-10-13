// import { AngularFirestore } from 'agularfire2/firestore';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {FireStore} from '../db'

export const createUser = functions.https.onRequest((req , res)=>{
    FireStore.addUser();
    res.send("hello world");
    // db.collection("users").add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // })
    // .then((docRef:any) => {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch((error:any) => {
    //     console.error("Error adding document: ", error);
    // });
})