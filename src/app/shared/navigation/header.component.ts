import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthActions } from '../../auth/ngrx/auth.action';
import { AuthState } from '../../auth/ngrx/auth.reducer';
import { Store } from '@ngrx/store';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  ifLogginPage: string;
  ifLoggingSubscription: Subscription;
  authenticated = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
     private http: HttpClient, private store: Store<AuthState>, private authSrv: AuthService) { }

  ngOnInit() {
     this.ifLoggingSubscription = this.activatedRoute.queryParams.subscribe(data => {
      this.ifLogginPage = data['mode'];
    });
    this.store.select('auth').subscribe(auth => {
      if (auth) {
        this.authenticated = auth.authenticated;
      }
    });
  }
  ngOnDestroy() {
    this.ifLoggingSubscription.unsubscribe();
  }
  register(mode: string): void {
    this.router.navigate(['/register'], {queryParams: {mode: mode}});
  }
  logOut() {
    this.authSrv.signOut();
  }
}
