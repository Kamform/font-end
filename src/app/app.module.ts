import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LoginComponent} from './pages/login/login.component';
import {RecentComponent} from './pages/recent/recent.component';
import {PublishedComponent} from './pages/published/published.component';
import {FavoritesComponent} from './pages/favorites/favorites.component';
import {UserComponent} from './pages/user/user.component';
import {ResourceComponent} from './pages/resource/resource.component';
import {FileComponent} from './pages/file/file.component';
import {RouterModule} from '@angular/router';
import {CategoryComponent} from './pages/category/category.component';
import {SignupComponent} from './pages/signup/signup.component';
import {BootstrapComponent} from './pages/bootstrap/bootstrap.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {EditComponent} from './pages/edit/edit.component';
import {AuthenticateGuard} from './guard/authenticate.guard';
import {ResourceCardComponent} from './components/resource-card/resource-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecentComponent,
    PublishedComponent,
    FavoritesComponent,
    UserComponent,
    ResourceComponent,
    FileComponent,
    CategoryComponent,
    SignupComponent,
    BootstrapComponent,
    EditComponent,
    ResourceCardComponent,
    ProfileComponent,
    SettingsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'publish', component: PublishedComponent, canActivate: [AuthenticateGuard]},
      {path: 'favorites', component: FavoritesComponent, canActivate: [AuthenticateGuard]},
      {path: 'user', component: UserComponent, canActivate: [AuthenticateGuard]},
      {path: 'profile', component: ProfileComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'resource', component: ResourceComponent, canActivate: [AuthenticateGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignupComponent},
      {path: 'edit', component: EditComponent, canActivate: [AuthenticateGuard]},
    ]),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [BootstrapComponent]
})
export class AppModule {
}
