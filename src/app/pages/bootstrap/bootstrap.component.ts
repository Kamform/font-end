import {Component, OnInit} from '@angular/core';
import {LoginServer} from '../../services/login-server.service';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {
  logState: LoginServer;

  constructor(logState: LoginServer) {
    this.logState = logState;
  }

  ngOnInit(): void {
  }

}
