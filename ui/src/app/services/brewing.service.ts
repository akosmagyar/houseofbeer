import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BrewingService {

  domain = "http://localhost:8000"; //TODO: ide a node js szerver api portja kell amugy
  options;
  authToken;
  user;
  constructor(private http: Http) { }


  getComments(id){
    let headers =new Headers();
	  headers.append('Content-Type','application/json');
	  let options = new RequestOptions({headers: headers});
      return this.http.get(this.domain + '/comments/' + id);
  }

  getThread(){
    let headers =new Headers();
	  headers.append('Content-Type','application/json');
	  let options = new RequestOptions({headers: headers});
      return this.http.get(this.domain + '/brewings/' + localStorage.getItem('id'));
  }

  writeComment(b_id, comment) {
    let headers =new Headers();
	  headers.append('Content-Type','application/json');
    let options = new RequestOptions({headers: headers});
    let newComment = {
      text : comment,
      userId: localStorage.getItem('id'),
      brewingId: b_id
    }

      return this.http.post(this.domain + '/brewings/comment', newComment, options);
  }
  startComment(brewings){ //Start Comment???
    let headers =new Headers();
	  headers.append('Content-Type','application/json');
    const options = new RequestOptions({headers: headers});
    const newBrewing = {
      name : brewings.title,
      story: brewings.textArea,
      level: brewings.level,
      //role: localStorage.getItem('role')
      role: brewings.role
    }

      return this.http.post(this.domain + '/brewings/start/', newBrewing, options);
  }

  getMyBrewings(){
    return this.http.get(this.domain + '/brewings/brewer/' + localStorage.getItem('id'));

  }

}
