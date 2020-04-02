import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private url = 'localhost:8080';
  private token: string;

  constructor(private http: HttpClient) {
  }

  private getToken(): string {
    return this.token != null ? this.token : (this.token = document.cookie);
  }

  private options(params?) {
    return {
      params,
      headers: {
        Authorization: 'Bearer ' + this.getToken()
      }
    };
  }

  private async authenticate(username: string, password: string): Promise<string> {
    return this.token = document.cookie = await this.http.post<string>(
      this.url + '/api/authenticate',
      {
        username,
        password
      }
    ).toPromise();
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
