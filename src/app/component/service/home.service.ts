import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public markAsTouched(objectControl :any) {
    Object.keys(objectControl).forEach(controlName => {
        if (objectControl[controlName].hasOwnProperty('controls')) {
            this.markAsTouched(objectControl[controlName].controls);
        } else {
            objectControl[controlName].markAsTouched();
        }
    });
}

  constructor(private _http : HttpClient) { }

  creatUser(user:any ) {
    return this._http.post("http://localhost:3000/registraction",user) ;

  } 

  getallUser() {
    return this._http.get("http://localhost:3000/registraction") ;
  }

  updateUser(user:any) {
    return this._http.put("http://localhost:3000/registraction/" + user.id , user) ;
  }



}
