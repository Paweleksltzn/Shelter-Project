import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyAIVXfdT_EtEImXb_AdQktb7A__Ne1-dd8',
        authDomain: 'shelterproject-c89d6.firebaseapp.com'
      }
    );
  }
}
