import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from '../services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class SAPGuard implements CanActivate {
  constructor(private router:Router,private rest:RestService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.rest.isSapUser()){
        return true;
      }else{
        this.router.navigateByUrl('/blank'); 
        return false;
      }
      
  
  }
  
}
