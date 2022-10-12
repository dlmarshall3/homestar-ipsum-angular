import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() paragraphs = [];

  retrieveParagraphs(paragraphs: any){
    this.paragraphs = paragraphs;
  }

}
