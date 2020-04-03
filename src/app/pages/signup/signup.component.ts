import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.email]);
  phone = new FormControl('', [Validators.required]);

  signUpInfo: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private service: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private builder: FormBuilder) {

    this.signUpInfo = builder.group({
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    });
  }

  ngOnInit(): void {
  }

  async signUp() {
    if (this.signUpInfo.valid) {
      await this.auth.put(
        '/api/user',
        this.signUpInfo.value
      );
      await this.router.navigate(['login']);
    }
  }
}
