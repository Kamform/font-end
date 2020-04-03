import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginServer} from '../../services/login-server.service';
import {ResourceService} from '../../services/resource.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title = new FormControl('', [Validators.required]);
  summary = new FormControl('', [Validators.required]);
  category = new FormControl('');

  form: FormGroup;

  constructor(
    builder: FormBuilder
  ) {
    this.form = builder.group({
      title: this.title,
      summary: this.summary,
      category: this.category
    });
  }

  ngOnInit(): void {
  }
}
