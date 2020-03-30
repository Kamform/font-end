import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  private service: CategoryService;

  categories;
  resources;

  constructor(service: CategoryService) {
    this.service = service;
  }

  async ngOnInit() {
    this.categories = await this.service.getList();
    this.switch(this.categories.content[0].id);
  }

  async switch(id: number) {
    this.resources = await this.service.getResourceList(id);
  }
}
