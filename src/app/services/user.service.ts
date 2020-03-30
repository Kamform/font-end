import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: HttpClient;
  private url = 'http://localhost:8080/api/user';

  constructor(http: HttpClient) {
    this.http = http;
  }

  async getInfo(id: number) {
    return this.http.get(this.url + '/' + id).toPromise();
  }

  async getFollowed(id: number) {
    return this.http.get(`${this.url}/${id}/followed`).toPromise();
  }

  async getFans(id: number) {
    return this.http.get(`${this.url}/${id}/followers`).toPromise();
  }

  async getPublish(id: number) {
    return this.http.get(`${this.url}/${id}/published`).toPromise();
  }

  async getFavorites(id: number) {
    return this.http.get(`${this.url}/${id}/favorites`).toPromise();
  }

  public async createUser(definer) {
    return this.http.put(this.url, definer).toPromise();
  }

  public async updateUser(recorder) {
    return this.http.post(this.url, recorder).toPromise();
  }

  public async deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id).toPromise();
  }
}
