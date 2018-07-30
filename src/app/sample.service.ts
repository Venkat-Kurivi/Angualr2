import {Http,Response} from '@angular/http'
import { Observable } from "rxjs";
import { Constants } from './constants';
import {  Injectable } from '@angular/core';
@Injectable()
export class sampleService{
 private baseURL: string = Constants.API_BASE_URL;
 constructor(private http: Http){

 }

 getUsers(){
     return this.http.get(this.baseURL + "/api/Home");
 }
}