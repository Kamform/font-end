import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ResourceService} from '../../services/resource.service';
import {LoginServer} from '../../services/login-server.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  info;
  published;
  favorites;
  followed;
  fans;

  constructor(
    private logState: LoginServer,
    private userService: UserService,
    private resourceService: ResourceService,
    private snackBar: MatSnackBar
  ) {
  }

  async ngOnInit() {
    const id = this.logState.account.id;
    this.info = await this.userService.getInfo(id);
    this.published = await this.userService.getPublish(id);
    this.favorites = await this.userService.getFavorites(id);
    this.followed = await this.userService.getFollowed(id);
    this.fans = await this.userService.getFans(id);
  }

  clickResource(id: number) {
    this.snackBar.open('clicked', null, {duration: 2000});
  }
}
