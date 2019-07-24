import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {QueryApi} from "../commonservice/request/QueryApi";
import { catchError } from 'rxjs/operators'
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private queryApi: QueryApi) { }

  PostUser(params):Observable<any>{
    console.log("object in service-----",params)
    return this.queryApi.doPost('POSTUSER',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

  get_user_email(params):Observable<any>{
    return this.queryApi.doGet('USERBYEMAIL',params)
      .pipe(
        catchError(err => of([err]))
      );

  }
}
