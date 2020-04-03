import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ResourceService} from '../../services/resource.service';
import {LoginServer} from '../../services/login-server.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthenticationService} from '../../services/authentication.service';
import {MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  index = 0;

  user = {
    username: '',
    email: '',
    phone: ''
  };
  published = [];
  favorites = [];
  followed = [];
  fans = [];

  constructor(
    private auth: AuthenticationService,
    private snackBar: MatSnackBar
  ) {
    auth.getAccount().then(value => {
      this.user = value;
      console.log(this.user);
    });
  }

  clickResource(id: number) {
    this.snackBar.open('clicked', null, {duration: 2000});
  }

  ngOnInit(): void {
  }
}
