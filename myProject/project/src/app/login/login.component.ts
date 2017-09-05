import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowhideService } from '../shared/showhide.service';
import { AuthenticationService ,User} from '../shared/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public user = new User('','','');
    public errorMsg = '';
    returnUrl: string;
    constructor(
       //private route: ActivatedRoute,
        private router: Router,
        private showHideService: ShowhideService,
        private authenticationService: AuthenticationService,) { }

   showingMovie:boolean= this.showHideService.showingMovie;
   showingLogOut:boolean= this.showHideService.showingLogOut;
   showingLogin:boolean=   this.showHideService.showingLogin;
   

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
       }


  login(user) {
        //this.hideService.setShowingLogin(false);
        if(!this.authenticationService.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    
        if(this.authenticationService.login(this.user)){
             this.showHideService.setShowingLogin(false);
             this.showHideService.setshowingMovie(true);
              this.showHideService.setShowingLogout(true);
              this.router.navigate(['/movie']);
        }
              
    }

}
