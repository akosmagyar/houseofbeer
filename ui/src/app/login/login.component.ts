import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //form
  account;
  password;
  //felhasznalasra
  id: string;
  username: string;
  email: string;
  experience: string;
  role: string;
  hide = true;
  progress = false;
  colour = 'warn';
  mode = 'indeterminate';


  constructor(
    private router: Router,
    private authService : AuthService
  ) {
    this.account = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(35)]);
   }

  ngOnInit() {
  }

  getErrorMessageAccount() {
    return this.account.hasError('required') ? 'You must enter a value' :
        this.account.hasError('minlength') ? 'Minimum characters: 3' :
        this.account.hasError('maxlength') ? 'Maximum characters: 15' :
            '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
    this.password.hasError('minlength') ? 'Minimum characters: 8' :
    this.password.hasError('maxlength') ? 'Maximum characters: 35' :
            '';
  }


  submit(){


    this.progress =true;

	  let user = {
		  username: this.account.value,
		  password: this.password.value
	  }
	  this.authService.loginUser(user).subscribe(data => {
      console.log(data);
      console.log(data["body"]);
      console.log(data.text());
      console.log(data.json().username);
      console.log(JSON.parse(data.text()));

      this.username = data.json().username;
      this.email = data.json().email;
      this.experience = data.json().experience;
      this.id = data.json()._id;
      this.role = data.json().role;
     // console.log(JSON.parse(data["body"]).username);
      localStorage.setItem('user', this.username  );
      localStorage.setItem('email', this.email  );
      localStorage.setItem('experience', this.experience  );
      localStorage.setItem('id', this.id  );
      localStorage.setItem('role', this.role  );
      setTimeout(() => {


        this.router.navigate(['/brewings']);
      }, 1000);
	  }, error => {
      console.log(error._body);
    });


  }
}
