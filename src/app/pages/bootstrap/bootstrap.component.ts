import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {

  public isLogin = false;

  constructor(private auth: AuthenticationService) {
    this.isLogin = auth.isAuthenticated();
  }

  ngOnInit(): void {
  }

  logout() {
    document.cookie = '';
    this.isLogin = false;
  }
}
