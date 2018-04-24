
import * as firebase from "firebase/app"; firebase

export class AuthServise {
   signup(email: string , password: string){
     return firebase.auth().createUserWithEmailAndPassword(email , password);
   }

   signin(email: string , password: string){
     return firebase.auth().signInWithEmailAndPassword(email , password);
   }

   logout(){
     firebase.auth().signOut() ;
   }

}
