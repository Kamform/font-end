import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginServer} from '../../services/login-server.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthenticationService} from '../../services/authentication.service';

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
    private auth: AuthenticationService,
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

  async login() {
    if (this.logInfo.valid) {
      this.auth.authenticate(this.logInfo.value).then(value => {
        if (value) {
          this.snackBar.open(
            'login success', null,
            {duration: 2000}
          );
          this.router.navigate(['']).then(result => {
            console.log(result);
          });
        } else {
          console.log(this.auth.error);
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
