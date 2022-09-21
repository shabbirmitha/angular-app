import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CLIENT_ID, CLIENT_SECRET } from '../credentials/GithubCred';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) {  }

  //for profile

  public getProfile(searchName):Observable<any>{
    let dataURL = `https://api.github.com/users/${searchName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

     return this.httpClient.get<any>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
     );
  }

  //for repo

  public getRepo(searchName):Observable<any[]>{
    let dataURL = `https://api.github.com/users/${searchName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

     return this.httpClient.get<any[]>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
     );
  }

  //for languages

  public getLang(searchName,repoName):Observable<Array<any>>{
    let dataURL = `https://api.github.com/repos/${searchName}/${repoName}/languages?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    return this.httpClient.get<Array<any>>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
     );
  }



  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      errorMessage=`MESSAGE : ${error.error.message}`
    }else{
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage);
  }


}
