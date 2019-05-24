import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/authservice.service';
import {BrewingService} from '../services/brewing.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   username;
   email;
   role;
   xp;
   level = 1;

  brewing  :{
    id: string,
    title: string,
    textArea : string,
    level: number
  } = {id: "", title: "", textArea : "", level : 1};
  brewings: Array<Object> = [];
  constructor(
    private authService : AuthService,
    private brewingService : BrewingService
  ) { }

  ngOnInit() {
    this.username = this.authService.getUserName();
    this.role = localStorage.getItem('role');
    this.email = localStorage.getItem('email');
    this.xp = localStorage.getItem('xp');

    this.brewingService.getMyBrewings().subscribe(brewing => {
      let myBrewing = brewing.json();
      console.log(myBrewing);
      for(let q of myBrewing) {
        console.log(q);
        this.brewing = {id: "", title: "", textArea : "", level : 1};
        this.brewing.title = q.name;
        this.brewing.textArea = q.story;
        this.brewing.level = q.level;
        console.log(this.brewing);
        this.brewings.push(this.brewing);
      }

    });
  }

}
