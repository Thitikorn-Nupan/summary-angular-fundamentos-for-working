import {Injectable} from '@angular/core';

// if i mark this @Injectable annotation
// i don't need to create instance on own just do on constructor as (private webStorageService : WebStorageService)
@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  public getLocal(key: string): any {
    const itemStorage = localStorage.getItem(key);
    try {
      return itemStorage ? JSON.parse(itemStorage) : null;
    } catch (error) {
      return null;
    }
  }

  public setLocal(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }

  public getSession(key: string): any {
    const itemStorage = sessionStorage.getItem(key);
    try {
      return itemStorage ? JSON.parse(itemStorage) : null;
    } catch (error) {
      return null;
    }
  }

  public setSession(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public clearSession() {
    sessionStorage.clear();
  }
}

