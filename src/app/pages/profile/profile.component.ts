import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ResourceService} from '../../services/resource.service';
import {LoginServer} from '../../services/login-server.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    username: '',
    password: '',
    email: '',
    phone: ''
  };
  published = [];
  favorites = [];
  followed = [];
  fans = [];

  constructor(
    private auth: AuthenticationService,
    private userService: UserService,
    private resourceService: ResourceService,
    private snackBar: MatSnackBar
  ) {
  }

  clickResource(id: number) {
    this.snackBar.open('clicked', null, {duration: 2000});
  }

  ngOnInit(): void {
  }
}
