import {Component} from '@angular/core';
import {AuthService} from './services/authservice.service';
import {Router} from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private authService : AuthService,
    private router : Router,
    private flashMessages : FlashMessagesService
  ){

  }
  logout(){
    this.authService.logoutUser();
    this.flashMessages.show('You are logged out.', { cssClass : 'alert-info'});
    this.router.navigate(['/']);
}
}
