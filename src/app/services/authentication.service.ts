import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'http://localhost:8080';
  private token = '';
  private useAuth = false;

  public error;
  public isLogin: boolean;

  constructor(private http: HttpClient) {
    this.isLogin = this.isAuthenticated();
  }

  isAuthenticated() {
    return this.getToken() !== '';
  }

  getToken(): string {
    return this.token !== '' ? this.token : (this.token = document.cookie);
  }

  private options(params?) {
    let headers = {};
    if (this.useAuth) {
      headers = {Authorization: 'Bearer ' + this.getToken()};
      this.useAuth = false;
    }
    return {
      params,
      headers
    };
  }

  auth() {
    this.useAuth = true;
    return this;
  }

  logout() {
    this.token = '';
    document.cookie = '';
    this.isLogin = false;
  }

  async authenticate(loginInfo: {
    username: string, password: string
  }): Promise<boolean> {
    return this.http.post(
      this.url + '/api/authenticate',
      {
        username: loginInfo.username,
        password: loginInfo.password
      },
      {
        responseType: 'text'
      }
    ).toPromise().catch(reason => {
      this.error = reason;
      return '';
    }).then(value => {
      this.token = document.cookie = value;
      return this.isLogin = this.isAuthenticated();
    });
  }

  async get<T>(
    path: string,
    params?: HttpParams | {
      [param: string]: string | string[];
    }): Promise<T> {

    return this.http.get<T>(
      this.url + path,
      this.options(params)).toPromise();
  }

  async post(path: string, body: any) {
    return this.http.post(
      this.url + path,
      body,
      this.options()
    ).toPromise();
  }

  async put(path: string, body: any) {
    return this.http.put(
      this.url + path,
      body,
      this.options()
    ).toPromise();
  }

  async patch(path: string, body: any) {
    return this.http.patch(
      this.url + path,
      body,
      this.options()
    ).toPromise();
  }

  async delete(id: number) {
    return this.http.delete(
      `${this.url}/${id}`, this.options()
    ).toPromise();
  }
}
