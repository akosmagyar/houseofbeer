import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

//import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  domain = "http://localhost:8000"; //TODO: ide a node js szerver api portja kell amugy

  options;
  authToken;
  user;

  constructor(
    private http : Http
  ) { }

  createAuthentication(){
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-type': 'application/json',
        'authorization' : this.authToken
      })
    })
  }

  getUserName() {
    return localStorage.getItem('user');
  }
  registerUser(user){
	  console.log(user);
	  let headers =new Headers();
	  headers.append('Content-Type','application/json');
    let options = new RequestOptions({headers: headers});

      return this.http.post(this.domain + '/user/register', user, options); //ide meg a valos api link megy	  majd btw
  }

  loginUser(user) {
    let headers =new Headers();
	  headers.append('Content-Type','application/json');
    let options = new RequestOptions({headers: headers});
    console.log("Ez a service user" + user);
    console.log("Ez a service json user" + JSON.stringify(user));
      return this.http.post(this.domain + '/auth/login', user, options);
  }

  logoutUser (){
      this.authToken = null;
      this.user = null;
      localStorage.clear();
  }

  storeUserData(user) {
    localStorage.setItem('user', user); //, JSON.stringify(user)
  }

  checkLogin(){
    if(localStorage.getItem('user') === null){
      return false;
    } else {
      return true;
    }
  }

  getProfile(){
   // this.createAuthentication();
    return this.http.get(this.domain + 'getuser',this.options);

  }
}
