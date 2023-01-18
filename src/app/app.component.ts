import { Component, OnInit } from '@angular/core';
// import * as keys from './global-keys.json';
const obj = require('./global-keys.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'untitled11';

  ngOnInit() {
    // console.log(obj);
    let result = {} as any;
    for(var key in obj){
      if(Array.isArray(result[obj[key]])){
        result[obj[key]].push(key);
      } else {
        result[obj[key]] = [key];
      }
    }

    for(var key2 in result){
      if(result[key2].length < 2){
        delete result[key2];
      }
    }

    // console.log(JSON.stringify(result));
    function sortObject(obj: object){
      return Object.entries(obj).sort((a,b) => b[1].length-a[1].length).filter(value => value[1].length > 5 && value[1].length <11);
    }

    // console.log(result);
    console.log(sortObject(result));
  }

}
