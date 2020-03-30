import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private http: HttpClient;
  private url = 'http://localhost:8080/api/resource';

  constructor(http: HttpClient) {
    this.http = http;
  }

  log() {
    console.log('?????');
  }

  async getRecent() {
    return this.http.get(this.url + '/recent').toPromise();
  }

  async create(definer) {
    return this.http.put(this.url, definer).toPromise();
  }
}
