import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/authservice.service';
import {BrewingService} from '../services/brewing.service';


@Component({
  selector: 'app-brewings',
  templateUrl: './brewings.component.html',
  styleUrls: ['./brewings.component.css']
})
export class BrewingsComponent implements OnInit {
  level = 1;

  brewing  :{
    id: string,
    title: string,
    textArea : string,
    level: number,
    role: string
  } = {id: "", title: "", textArea : "", level : 1, role: ""};
  brewings: Array<Object> = [];
  //role: string;
  constructor(
    private authService: AuthService,
    private brewingService: BrewingService

  ) {
    //this.brewing = "shit";
   }

  ngOnInit() {
    this.brewing.title  = "Sample of brewing progress";
    this.brewing.textArea  = "Let's see how it's made...";
    this.brewings.push(this.brewing);
    this.brewingService.getMyBrewings().subscribe(brewing => {
      //TODO: list all brewings, but we don't have the function at the back end yet.
      let myBrewing = brewing.json();
      console.log(myBrewing);
      for(let q of myBrewing) {
        console.log(q);
        this.brewing = {id: "", title: "", textArea : "", level : 1, role:"" };
        this.brewing.id = q._id; //TODO: a mentes latszik de a megjelenites nem
        this.brewing.title = q.name;
        this.brewing.textArea = q.story;
        this.brewing.level = q.level;
        this.brewing.role = localStorage.getItem('role');
        console.log(this.brewing);
        this.brewings.push(this.brewing);
      }
    });
  }


  submit(){
    //TODO: Ide egy snackbar jon majd
    //let snackBarRef = snackBar.open('Message archived');
    this.brewing = {id: "", title: "", textArea : "", level : 1, role: ""};

    this.brewing.title  = (<HTMLInputElement>document.getElementById("brewingName")).value;
    this.brewing.textArea  = (<HTMLTextAreaElement>document.getElementById("brewingDescription")).value;
    this.brewing.level  = this.level;
    this.brewing.role = localStorage.getItem('role');

    console.log(this.brewing);

    this.brewingService.startComment(this.brewing).subscribe(data => {

      setTimeout(() => {
        this.brewings.push(this.brewing);

       // this.router.navigate(['/brewings']);
      }, 1000); //TODO: ide ez jon: data.username
	  }, error => {
      console.log(error._body);
    });
    console.log(this.brewing);
  }
}
