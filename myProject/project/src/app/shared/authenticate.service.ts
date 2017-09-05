import { Injectable } from '@angular/core';
import {Router} from '@angular/router'; 
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'
export class User {
  constructor(
    public email: string,
    public password: string,
    public name: string) { }
}
 
var users = [
  new User('nutan@gmail.com','123','Nutan'),
  new User('user@gmail.com','user','User')
];

@Injectable()
export class AuthenticationService {
constructor(
    private _router: Router,
    private http:Http){}

     login(userss) {
        var authenticatedUser = users.find(u => u.email === userss.email);
      
          if (authenticatedUser && authenticatedUser.password === userss.password && authenticatedUser.email === userss.email ){

        return this.http.post('backend/user.json', JSON.stringify({ username: userss.email, password: userss.password , name:userss.name}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
   }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
 
//   logout() {
//     localStorage.removeItem("currentUser");
//     this._router.navigate(['login']);
//   }
 
//   login(user){
//       var authenticatedUser = users.find(u => u.email === user.email);
      
//     if (authenticatedUser && authenticatedUser.password === user.password){
//       localStorage.setItem("currentUser", JSON.stringify(user));
//       localStorage.getItem(authenticatedUser.email);
//       this._router.navigate(['movie']);      
//       return true;
//     }
// else   if (!authenticatedUser && authenticatedUser.password != user.password){
//     return false;
// }
 
//   }
 
//    checkCredentials(user){
//        var authenticatedUser = users.find(u => u.email === user.email);
  
//     if (authenticatedUser && authenticatedUser.password === user.password){
//           localStorage.setItem('currentUser', JSON.stringify(user));
//            localStorage.getItem(authenticatedUser.email);
//           return authenticatedUser;
//     }
//     else if (localStorage.getItem("currentUser") === null){
//         this._router.navigate(['login'])}
//   } 
}
