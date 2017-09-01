import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {
  constructor() { }

  cacheData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getCache(key, defaultValue?: any) {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return defaultValue || null;
  }

}
