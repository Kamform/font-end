import {Component, OnInit} from '@angular/core';
import {ResourceService} from '../../services/resource.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
  private service: ResourceService;

  recent;

  constructor(service: ResourceService) {
    this.service = service;
  }

  async ngOnInit() {
    this.recent = await this.service.getRecent();
  }

}
