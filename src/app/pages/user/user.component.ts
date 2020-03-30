import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {LoginServer} from '../../services/login-server.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  logState: LoginServer;
  service: UserService;

  user;

  edit = false;

  recorder = new FormGroup({
    id: new FormControl(0),
    username: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    isLock: new FormControl(false),
    isAdmin: new FormControl(false),
    isEnable: new FormControl(false),
  });

  constructor(service: UserService, logState: LoginServer) {
    this.service = service;
    this.logState = logState;
  }

  async ngOnInit() {
    this.user = await this.service.getInfo(this.logState.account.id);
    this.recorder.setValue({
      id: this.user.id,
      username: this.user.username,
      password: '',
      email: this.user.email,
      phone: this.user.phone,
      isLock: this.user.isLock,
      isEnable: this.user.isEnable,
      isAdmin: this.user.isAdmin,
    });
  }

  async update() {
    this.service.updateUser(this.recorder.value);
    this.edit = false;
    this.user = await this.service.getInfo(this.logState.account.id);
  }
}
