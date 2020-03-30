import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private service: UserService;

  signupInfo = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(
    service: UserService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.service = service;
  }

  ngOnInit(): void {
  }

  async signup() {
    await this.service.createUser(this.signupInfo.value).then(_ => {
      const ref = this.snackBar.open('done', null, {
        duration: 2000
      });
      this.router.navigate(['login']);
    });
  }
}
