import { Injectable } from '@angular/core';

@Injectable()
export class ShowhideService {
showingMovie:boolean= false;
    showingLogOut:boolean= false;
    showingLogin:boolean=   true;


    setshowingMovie(showingPatient:boolean):void {
        this.showingMovie = showingPatient;
    }
  
    
    setShowingLogin(showingLogin:boolean):void {
        this.showingLogin = showingLogin;
    }
     setShowingLogout(showingLogOut:boolean):void {
        this.showingLogOut = showingLogOut;
    }
        
    getshowingMovie():boolean {
        return this.showingMovie;
    }
    
    
    getShowingLogout():boolean {
        return this.showingLogOut;
    }
        
    getShowingLogin():boolean {
        return this.showingLogin;
    }
  constructor() { }

}
