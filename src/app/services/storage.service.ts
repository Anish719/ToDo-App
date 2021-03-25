import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  storeLData(key: string, data: any) {
    localStorage.setItem(key, data);
  }

  storeSessionData(key: string, data: any) {
    sessionStorage.setItem(key, data);
  }
}
