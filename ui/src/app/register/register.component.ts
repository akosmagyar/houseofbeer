import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/authservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email;
  account;
  password;
  role;
  confirmation;
  hide = true;
  experience: string;
  roles = ['Brewer', 'Reader'];
  experiences = [
    'Absolute beginner',
    'Beginner',
    'Experienced',
    'Master'
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router: Router
  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.account = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(35)]);
    this.role = "Brewer";
    this.confirmation = new FormControl('', [Validators.required], );
   }

  ngOnInit() {

  }


  getErrorMessageAccount() {
    return this.account.hasError('required') ? 'You must enter a value' :
        this.account.hasError('minlength') ? 'Minimum characters: 3' :
        this.account.hasError('maxlength') ? 'Maximum characters: 15' :
            '';
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
    this.password.hasError('minlength') ? 'Minimum characters: 8' :
    this.password.hasError('maxlength') ? 'Maximum characters: 35' :
            '';
  }

  submit()
  {
	  console.log(this.experience);
	  let user = {
		  name: this.account.value,
      password: this.password.value,
      email: this.email.value,
      role: this.role,
      experience: this.experience
    }
    //localStorage.setItem('user', this.account.value);
    //localStorage.setItem('character', this.experience);
	  this.authService.registerUser(user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login']);
	  }, error => {
      console.log(error["body"]);
    });
  }


}
