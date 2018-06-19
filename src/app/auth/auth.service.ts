import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AuthService {
    authorized = false;
    username: string;
    token: string;
    constructor(private http: HttpClient) { }
    createAccount(email: string, password: string, username: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
            this.username = username;
            let databaseKey = '';
            for (let i = 0; i < email.length; i++) {
                if (email[i] !== '.') {
                    databaseKey += email[i];
                }
            }
            firebase.auth().signInWithEmailAndPassword(email, password).then(signResponse => {
                this.authorized = true;
                firebase.auth().currentUser.getIdToken().then(token => {
                    this.token = token;
                    this.http.put('https://shelterproject-c89d6.firebaseio.com/' + databaseKey + '.json',
                    {username: this.username}, {params: {auth: this.token}})
                   .subscribe( httpAnswer => {
                   }, error => {
                   });
                });
            });
        });
    }
    signIn(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
            this.authorized = true;
            let databaseKey = '';
            for (let i = 0; i < email.length; i++) {
                if (email[i] !== '.') {
                    databaseKey += email[i];
                }
            }
            firebase.auth().currentUser.getIdToken().then(token => {
                this.token = token;
                this.http.get('https://shelterproject-c89d6.firebaseio.com/' + databaseKey + '/username.json')
                .subscribe((username: string) => {
                    this.username = username;
                    console.log(this.username);
                });
            });
        });
    }
    signOut() {
        firebase.auth().signOut();
        this.authorized = false;
    }
    getToken(): string {
        firebase.auth().currentUser.getIdToken().then(token => {
            this.token = token;
        });
        return this.token;
    }
}
