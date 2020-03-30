import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginServer} from '../../services/login-server.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  logInfo: FormGroup;

  constructor(
    private service: LoginServer,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    this.logInfo = formBuilder.group({
      username: this.username,
      password: this.password,
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.logInfo.valid) {
      this.service.login(this.logInfo.value).then(result => {
        if (result) {
          this.snackBar.open('success', null, {
            duration: 2000
          });
          this.router.navigate(['']);
        } else {
          this.logInfo.setErrors({
            failed: true
          });
        }
      });
    }
  }

  toSignUp() {
    this.router.navigate(['sign-up']);
  }
}
