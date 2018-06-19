import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  ifLogginPage: string;
  ifLoggingSubscription: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
     this.ifLoggingSubscription = this.activatedRoute.queryParams.subscribe(data => {
      this.ifLogginPage = data['mode'];
    });
  }
  ngOnDestroy() {
    this.ifLoggingSubscription.unsubscribe();
  }
  register(mode: string): void {
    this.router.navigate(['/register'], {queryParams: {mode: mode}});
  }

}
