import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  StorageService: StorageService = new StorageService();
  // http: any;
  constructor(private http: HttpClient) {}
  getData() {
    let data = JSON.stringify(
      this.StorageService.getUserDataFromLocalStorage()
    );
    return JSON.parse(data);
  }

  getUserData() {
    return this.getData().data;
  }

  getUserID() {
    return this.getUserData().id;
  }

  user_accessToken() {
    return this.getData().access_token;
  }
  getIsAuthenticated(): boolean {
    return this.user_accessToken() != null;
  }
  getName() {
    return `${this.getUserData()?.fname}`;
  }
  signOut() {
    localStorage.removeItem('userData');
  }
  async getUsers() {
    return this.http.get(`${environment.apiURL}admin/users`);
  }
}
