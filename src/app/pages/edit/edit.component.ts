import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginServer} from '../../services/login-server.service';
import {ResourceService} from '../../services/resource.service';
import {AuthenticationService} from '../../services/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  categories = [];
  files = [];

  title = new FormControl('', [Validators.required]);
  summary = new FormControl('', [Validators.required]);
  category = new FormControl(null);
  file = new FormControl([]);

  form: FormGroup;

  constructor(
    builder: FormBuilder,
    private auth: AuthenticationService,
    private snackBar: MatSnackBar
  ) {
    this.form = builder.group({
      title: this.title,
      summary: this.summary,
      category: this.category,
      files: this.files,
    });

    auth.getAccount().then(result => {
      auth.get<any>(
        '/api/category'
      ).then(value => {
        this.categories = value.content;
        console.log(this.categories);
      });

      auth.get<any>(
        `/api/user/${result.id}/files`
      ).then(value => {
        this.files = value.content;
        console.log(this.files);
      });
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      // this.auth.takeToken().put(
      //   '/api/resource',
      //   this.form.value
      // ).then(() => {
      //   this.snackBar.open(
      //     'success', null, {
      //       duration: 2000
      //     });
      // }).catch(reason => {
      //   console.log(reason);
      // });
    }
  }
}
