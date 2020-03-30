import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http: HttpClient;
  private categoryUrl = 'http://localhost:8080/api/category';

  constructor(http: HttpClient) {
    this.http = http;
  }

  async getList() {
    return this.http.get(this.categoryUrl).toPromise();
  }

  async getResourceList(id: number) {
    return this.http.get(this.categoryUrl + '/' + id + '/resources').toPromise();
  }
}
