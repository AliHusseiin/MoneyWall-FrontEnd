import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UserAssetsService {
  constructor(private http: HttpClient) {}

  getAllUserAssets() {
    return this.http.get(`${environment.apiURL}user/assets`);
  }
  getUserDataFromLocalStorage(): any {
    return JSON.parse(localStorage.getItem('userData') || '[]');
  }

  getData() {
    let data = JSON.stringify(this.getUserDataFromLocalStorage());
    return JSON.parse(data);
  }
  getUserData() {
    return this.getData().data;
  }
  user_accessToken() {
    return this.getData().access_token;
  }
  getIsAuthenticated(): boolean {
    return this.user_accessToken() != null;
  }

  addOtherAssetRequest(assetInfo: object) {
    return this.http.post(
      `${environment.apiURL}user/createasset?other=true`,
      assetInfo
    );
  }
  addRealEstateAssetRequest(assetInfo: object) {
    return this.http.post(
      `${environment.apiURL}user/createasset?realestate=true`,
      assetInfo
    );
  }
  addVehicleAssetRequest(assetInfo: object) {
    return this.http.post(
      `${environment.apiURL}user/createasset?vehicle=true`,
      assetInfo
    );
  }
}