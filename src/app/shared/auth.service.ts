import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  register(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.auth.signOut();
  }
}
