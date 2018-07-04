import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureState } from '../../auth/ngrx/auth.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  authenticated = false;
  authSubscription: Subscription;
  constructor(private router: Router, private store: Store<FeatureState> ) { }

  ngOnInit() {
   this.authSubscription = this.store.select('auth').subscribe(auth =>  {
      if (auth) {
        this.authenticated = auth.authenticated;
      }
    });
  }
  login(mode: string): void {
    this.router.navigate(['/register'], {queryParams: {mode: mode}});
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
