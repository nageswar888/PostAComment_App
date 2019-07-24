import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {QueryApi} from "./commonservice/request/QueryApi";
import { catchError } from 'rxjs/operators'
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentsLikesService {

  constructor(private http: HttpClient, private queryApi:QueryApi) { }

  getComments(params):Observable<any>{
    //console.log("id in service-----",params)
    return this.queryApi.doGet('COMMENT',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

  createComment(params):Observable<any>{
    console.log("object in service-----",params)
    return this.queryApi.doPost('COMMENTPOST',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

}
