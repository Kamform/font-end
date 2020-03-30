import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginServer} from '../../services/login-server.service';
import {ResourceService} from '../../services/resource.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  logState: LoginServer;
  categoryService: CategoryService;
  resourceService: ResourceService;
  categories;

  definer;

  constructor(logState: LoginServer, categoryService: CategoryService, resourceService: ResourceService) {
    this.logState = logState;
    this.categoryService = categoryService;
    this.resourceService = resourceService;
    this.definer = new FormGroup({
      author: new FormControl(this.logState.account.id),
      category: new FormControl(''),
      title: new FormControl(''),
      summary: new FormControl(''),
      files: new FormControl([]),
    });
  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  async getCategoryList() {
    this.categories = await this.categoryService.getList();
  }

  create() {
    this.resourceService.create(this.definer.value);
  }
}
