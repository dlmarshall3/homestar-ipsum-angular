import { Component, OnInit } from '@angular/core';

const hrModule = require('homestar-ipsum');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  paragraphs = [];

  ngOnInit(): void {
  }

  onClick(number: string){
    let parsedInt = +number;
    this.paragraphs = hrModule.getMultipleParagraphs(parsedInt);
  }

}
