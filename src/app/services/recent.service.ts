import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const url = 'http://localhost:8080/api/resource';

@Injectable({
  providedIn: 'root'
})
export class RecentService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async getList() {
    return this.http.get(url).toPromise();
  }
}
