import { Component, OnInit } from '@angular/core';
import { sampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service: sampleService){

  }

  title = 'app';
  usersList:Array<any>; 
  errorDesc: any = {};
  getUsers(){
   this.service.getUsers().subscribe(
     (response =>{ 
         this.usersList =JSON.parse( response.text());
    console.log(this.usersList);
     }),
   (error=>{this.errorDesc = JSON.parse(error.text());console.log("error Des",this.errorDesc);})
    )

   
  }
  ngOnInit(){
    this.getUsers();
  }
 
}
