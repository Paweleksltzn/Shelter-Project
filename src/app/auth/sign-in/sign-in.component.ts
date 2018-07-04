import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  mode: string;
  logAttempt: boolean;
  logErrorMessage: string;
  constructor(private activeRoute: ActivatedRoute, private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
    this.logAttempt = false;
    this.mode = this.activeRoute.snapshot.queryParams['mode'];
    this.authSrv.authTry.subscribe((message: string) => {
      this.logAttempt = true;
      this.logErrorMessage = message;
    });
  }
  onSubmit(form) {
    const password = form.value.password;
    const email = form.value.email;
    if (this.mode === 'register') {
      const username = form.value.username;
      this.authSrv.createAccount(email, password, username);
    } else if (this.mode === 'sign') {
      this.authSrv.signIn(email, password);
    }
    form.reset();
  }
}
