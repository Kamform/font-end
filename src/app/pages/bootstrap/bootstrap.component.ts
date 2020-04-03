import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {

  public isLogin: boolean;

  constructor(
    private auth: AuthenticationService,
    private router: Router) {

    auth.isLogin.subscribe(value => {
      console.log(value);
      this.isLogin = value;
    });
  }

  ngOnInit(): void {
  }
}
