import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {WebStorageService} from '../service/web-storage-service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {

  constructor(private router: Router,private webStorageService : WebStorageService ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('next : ',next)
    console.log('state : ',state)
    const isUserLogin= Boolean(this.webStorageService.getLocal('login'))
    if (state.url==='/' || state.url==='/login') {
      if (isUserLogin) {
        console.log('got login user can not go to / or /login');
        return false
      }
      // can go thru
      return true
    }
    // can go thru
    return true
  }

}
