import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {TypesComponent} from '../types/types.component';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,
  public dialog: MatDialog) { }

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['register']);
}

openDialog() {
  const dialogRef = this.dialog.open(TypesComponent, {
    height: '600px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    });
  }

}

