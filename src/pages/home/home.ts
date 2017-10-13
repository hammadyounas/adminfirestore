import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';


export interface Item{
  name:string;
  price:number;
}
export interface Itemid extends Item { id: string; }


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isEdit = false;
  text;
  modifyText;
  itemsCollection: AngularFirestoreCollection<Item>;
  deleteItem: AngularFirestoreDocument<Item>
  modifyItem: AngularFirestoreDocument<Item>
  items: Observable<Item[]>;
  data: Observable<any>;
  constructor(public navCtrl: NavController,private db: AngularFirestore ) {
    this.itemsCollection = db.collection<Item>('tshirts');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    this.db.collection('tshirts', itemsCollection => itemsCollection.where('name', '==', 'item')).valueChanges().subscribe(user =>{
      console.log(user);
    })
    // db.collection('cotton', ref => ref.where('price', '==', '10'));
    // this.itemsCollection.valueChanges().map(actions=>{
    //   console.log("32",actions); 
    // })
    this.items.subscribe(console.log);


    // this.items = this.itemsCollection.snapshotChanges().map(actions =>{
    //   return
    // })
    
    // this.items = this.itemsCollection.valueChanges();
    // console.log("this.items", this.items);

  }
  modify(item){
    // this.isEdit = true;
    let tempItem: Item = {
      name: this.modifyText,
      price: item.price
    }
    console.log("item",item.id);
    let ref = 'tshirts/'+item.id;
    console.log("ref",ref);
    this.modifyItem = this.db.doc<Item>(ref);
    console.log(this.modifyItem);
    this.modifyItem.set(tempItem).then(a =>{
      this.modifyText = '';
      console.log("done");
    })
  }
  add(){
    let add: Item = {
      name: this.text,
      price: 10
    }
    this.itemsCollection = this.db.collection<Item>('tshirts');
    this.itemsCollection.add(add).then(a=>{
      this.text = '';
      console.log("added");
    })
  }
  delete(item){
    let ref = 'tshirts/'+item.id;
    console.log("ref",ref);
    this.deleteItem = this.db.doc<Item>(ref);
    this.deleteItem.delete();
  }

}
