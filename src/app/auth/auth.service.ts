import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as authState from './ngrx/auth.reducer';
import * as action from './ngrx/auth.action';
import { ActionSequence } from 'protractor';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
    token: string;
    authTry = new Subject();
    constructor(private http: HttpClient, private store: Store<authState.AuthState>, private router: Router) { }
    createAccount(email: string, password: string, username: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
            let databaseKey = '';
            for (let i = 0; i < email.length; i++) {
                if (email[i] !== '.') {
                    databaseKey += email[i];
                }
            }
            firebase.auth().signInWithEmailAndPassword(email, password).then(signResponse => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken().then(token => {
                    this.token = token;
                    this.http.put('https://shelterproject-c89d6.firebaseio.com/' + databaseKey + '.json',
                    {username: username}, {params: {auth: this.token}})
                   .subscribe( httpAnswer => {
                       this.store.dispatch(new action.LogIn({username: username, token: this.token}));
                   }, error => {
                   });
                });
            });
        }).catch(error => {
            this.authTry.next('Podany adres email jest zajęty');
        });
    }
    signIn(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
            this.router.navigate(['/']);
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
                    this.store.dispatch(new action.LogIn({username: username, token: this.token}));
                });
            });
        }).catch(error => {
            this.authTry.next('Niepoprawna nazwa konta lub hasła');
        });
    }
    signOut() {
        firebase.auth().signOut();
        this.store.dispatch(new action.LogOut());
    }
    getToken(): string {
        firebase.auth().currentUser.getIdToken().then(token => {
            this.token = token;
        });
        return this.token;
    }
}
