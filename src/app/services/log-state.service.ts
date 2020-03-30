import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogStateService {
  private http: HttpClient;

  public account;
  public islog = false;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async login(info: { username, password }) {
    try {
      this.account = await this.http.get(
        'http://localhost:8080/api/login',
        {
          headers: {
            Authorization: 'Basic ' + btoa(info.username + ':' + info.password),
          }
        }).toPromise();
    } catch (e) {
      this.islog = false;
      return this.islog;
    }
    this.islog = true;
    return this.islog;
  }

  logout() {
    this.islog = false;
  }
}
