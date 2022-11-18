import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { logOut } from 'src/app/store/auth/auth.action';
@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {
  profileimage:any;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onLogout(event: Event){
    event.preventDefault();
    this.store.dispatch(logOut())
      }
}
